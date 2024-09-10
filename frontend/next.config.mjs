/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Tắt React Strict Mode
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
