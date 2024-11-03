/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: ["sydneylimousineservice.com"], // Add the external domain here
//   },
// };

// module.exports = nextConfig;

// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sydneylimousineservice.com",
      },
    ],
  },
};

export default nextConfig;
