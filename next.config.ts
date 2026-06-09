import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  output: 'export',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'none'; style-src 'unsafe-inline'; sandbox;",
    unoptimized: true,
  },
};

export default nextConfig;
