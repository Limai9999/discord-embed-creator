/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "/discord-embed-creator/",
  basePath: "/discord-embed-creator",
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
