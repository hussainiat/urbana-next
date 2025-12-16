import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['randomuser.me', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;