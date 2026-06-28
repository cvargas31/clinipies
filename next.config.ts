import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Fotos de la galería servidas desde Pexels (next/image las optimiza).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
  },
};

export default nextConfig;
