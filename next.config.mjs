/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com",
        protocol: "https",
      },
      {
        hostname: "inner-garden-image-store.s3.amazonaws.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
