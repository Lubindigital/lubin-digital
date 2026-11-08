import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        // Vercel redirected the apex to www at the domain level; off Vercel the
        // app does it. Both hosts point at this service.
        source: "/:path*",
        has: [{ type: "host", value: "lubindigital.com" }],
        destination: "https://www.lubindigital.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // The platform's generated address serves the same pages as
        // www.lubindigital.com; keep it out of search results.
        source: "/:path*",
        has: [{ type: "host", value: "(.*)\\.(vercel\\.app|ivyup\\.io)" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
