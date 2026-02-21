/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Custom domain projyotish.com — no basePath or assetPrefix needed
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
