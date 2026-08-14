/**
 * Contact form endpoint.
 *
 * Replaces Formspree. Calls the Resend REST API with fetch, so there is no SDK
 * to install and nothing to keep in sync. Same shape as the endpoint on the
 * client sites (see lubindig/kauai-maintenance/api/contact.js).
 *
 * Environment variables (set in the Vercel project, never in this file):
 *   RESEND_API_KEY  required to actually send. Without it the endpoint accepts
 *                   the submission and returns delivered:false rather than
 *                   pretending an email went out.
 *   CONTACT_TO      where enquiries land. Defaults to westan@lubindigital.com.
 *   CONTACT_FROM    the sender. Must be on a domain verified in Resend.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const OWNER_FALLBACK = "westan@lubindigital.com";
const FROM_FALLBACK = "Lubin Digital <onboarding@resend.dev>";

const MAX = { name: 120, email: 200, business: 200, service: 60, message: 4000 };

// Anything faster than this is not a person reading the page.
const MIN_SECONDS = 3;

const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const clean = (v: unknown, max: number) =>
  String(v ?? "").replace(/\s+/g, " ").trim().slice(0, max);

// Deliberately loose. Strict email regexes reject valid addresses.
const looksLikeEmail = (e: string) => /^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(e);

const SERVICE_LABELS: Record<string, string> = {
  "new-website": "A new website",
  "ai-system": "An AI system or automation",
  ecommerce: "An online store",
  "add-ai": "Add AI to an existing site",
  other: "Something else",
};

/**
 * Best-effort rate limiting, per IP. Serverless instances are ephemeral and
 * there can be several at once, so this is a speed bump rather than a
 * guarantee. It costs nothing and stops naive floods. Move to Vercel KV if it
 * ever needs to be real.
 */
const HITS = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  if (!ip) return false;
  const now = Date.now();
  const hits = (HITS.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  HITS.set(ip, hits);
  if (HITS.size > 5000) HITS.clear();
  return hits.length > MAX_PER_WINDOW;
}

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}: ${detail.slice(0, 300)}`);
  }
  return res.json();
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Malformed request." }, { status: 400 });
  }

  // Trap 1 — honeypot. Named `fax` rather than `company` on purpose: this form
  // has a real Business field with autocomplete="organization", and a hidden
  // field called `company` is exactly what a browser autofill would populate,
  // which would silently discard genuine enquiries.
  if (clean(body.fax, 100)) {
    return Response.json({ ok: true, delivered: false, reason: "filtered" });
  }

  // Trap 2 — submitted faster than a person could read the form.
  const elapsed = Number(body.elapsed);
  if (Number.isFinite(elapsed) && elapsed < MIN_SECONDS) {
    return Response.json({ ok: true, delivered: false, reason: "filtered" });
  }

  // Trap 3 — rate limit per IP.
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "";
  if (rateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Too many requests. Please email westan@lubindigital.com." },
      { status: 429 }
    );
  }

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const business = clean(body.business, MAX.business);
  const serviceRaw = clean(body.service, MAX.service);
  const service = SERVICE_LABELS[serviceRaw] ?? "";
  const message = String(body.message ?? "").trim().slice(0, MAX.message);

  const errors: string[] = [];
  if (!name) errors.push("name");
  if (!email || !looksLikeEmail(email)) errors.push("email");
  if (!message) errors.push("message");
  if (errors.length) {
    return Response.json(
      { ok: false, error: "Please check the highlighted fields.", fields: errors },
      { status: 422 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || OWNER_FALLBACK;
  const from = process.env.CONTACT_FROM || FROM_FALLBACK;

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY missing — accepted but not delivered:", {
      name, email,
    });
    return Response.json({ ok: true, delivered: false, reason: "email-not-configured" });
  }

  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:6px 16px 6px 0;color:#585c63;white-space:nowrap;vertical-align:top">${label}</td>
         <td style="padding:6px 0;color:#16181c"><strong>${esc(value)}</strong></td></tr>`
      : "";

  const ownerHtml = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px">
      <p style="font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#0e7c86;margin:0 0 6px">New enquiry</p>
      <h1 style="font-size:22px;margin:0 0 18px;color:#16181c">${esc(name)}</h1>
      <table style="border-collapse:collapse;font-size:15px;line-height:1.5">
        ${row("Email", email)}
        ${row("Business", business)}
        ${row("Needs", service)}
      </table>
      <p style="margin:18px 0 4px;color:#585c63;font-size:13px">The project</p>
      <p style="margin:0;padding:12px 14px;background:#f1efe8;border-radius:8px;color:#16181c;white-space:pre-wrap">${esc(message)}</p>
      <p style="margin:22px 0 0;font-size:13px;color:#585c63">
        Reply to this email and it goes straight to ${esc(email)}.
      </p>
      <p style="margin:14px 0 0;font-size:12px;color:#585c63">Sent from the contact form on lubindigital.com</p>
    </div>`;

  const senderHtml = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:520px;font-size:16px;line-height:1.6;color:#16181c">
      <p>Thanks ${esc(name.split(" ")[0])} — I've got your message.</p>
      <p>You'll get a real reply within a day, with honest thoughts on how I'd
      approach it. If it turns out I'm not the right fit, I'll tell you that
      rather than leave you waiting.</p>
      <p style="margin:22px 0 6px;font-size:13px;color:#585c63">What you sent me</p>
      <p style="margin:0;padding:12px 14px;background:#f1efe8;border-radius:8px;white-space:pre-wrap">${esc(message)}</p>
      <p style="margin-top:26px">Westan<br>
        <span style="color:#585c63;font-size:14px">Lubin Digital<br>
        lubindigital.com &middot; (530) 386-4145</span>
      </p>
    </div>`;

  const [ownerRes, ackRes] = await Promise.allSettled([
    sendEmail(apiKey, {
      from,
      to: [to],
      reply_to: email,
      subject: `New enquiry — ${name}${business ? `, ${business}` : ""}`,
      html: ownerHtml,
    }),
    sendEmail(apiKey, {
      from,
      to: [email],
      reply_to: to,
      subject: "Got your message — Lubin Digital",
      html: senderHtml,
    }),
  ]);

  if (ownerRes.status === "rejected")
    console.error("[contact] owner email failed:", (ownerRes.reason as Error)?.message);
  if (ackRes.status === "rejected")
    console.error("[contact] acknowledgement failed:", (ackRes.reason as Error)?.message);

  // The lead is only genuinely lost if it never reaches the inbox. A failed
  // acknowledgement must never cost the enquiry.
  if (ownerRes.status === "rejected") {
    return Response.json(
      { ok: false, error: "That didn't send. Please email westan@lubindigital.com directly." },
      { status: 502 }
    );
  }

  return Response.json({
    ok: true,
    delivered: true,
    acknowledged: ackRes.status === "fulfilled",
  });
}

export function GET() {
  return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
}
