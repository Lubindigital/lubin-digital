import { NextResponse, type NextRequest } from "next/server";

/**
 * Host-based behaviour that next.config.ts cannot do behind Project Cloud's
 * edge. The edge rewrites the Host header on the way to the app, so the
 * `has: [{ type: "host" }]` rules in next.config.ts never fire there (checked
 * live 2026-11-10: the apex served 200 and the generated address had no
 * X-Robots-Tag). The original host is read from X-Forwarded-Host first and
 * Host second.
 *
 *  - lubindigital.com -> 308 to https://www.lubindigital.com/<path>
 *    Vercel did this at the domain level; off Vercel the app does it.
 *  - The platform's generated *.ivyup.io (or *.vercel.app) address serves the
 *    same pages as www: X-Robots-Tag: noindex keeps it out of search results.
 *
 * Confirmed on Cloud 2026-11-11: the edge sends Host as the machine's internal
 * name and the original host in X-Forwarded-Host.
 */
const CANONICAL = "www.lubindigital.com";
const GENERATED = /\.(ivyup\.io|vercel\.app)$/i;

function effectiveHost(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-host");
  const raw = (forwarded ? forwarded.split(",")[0] : req.headers.get("host")) ?? "";
  return raw.trim().split(":")[0].toLowerCase();
}

export function proxy(req: NextRequest) {
  const host = effectiveHost(req);

  if (host === "lubindigital.com") {
    const url = new URL(req.nextUrl.pathname + req.nextUrl.search, `https://${CANONICAL}`);
    return NextResponse.redirect(url, 308);
  }

  const res = NextResponse.next();
  if (host !== CANONICAL && GENERATED.test(host)) {
    res.headers.set("X-Robots-Tag", "noindex");
  }
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
