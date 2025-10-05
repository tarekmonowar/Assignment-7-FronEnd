// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "serviceapi.spicezgold.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "res.cloudinary.com",
    ],
  },
  // Add this to handle trailing slashes consistently
  trailingSlash: false,
  // Ensure we don't have any conflicting redirects
  async redirects() {
    return [];
  },
};

export default nextConfig;
