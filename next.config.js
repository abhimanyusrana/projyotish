/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // GitHub Pages serves the site at /projyotish/ — set basePath + assetPrefix
  // so all /_next/ asset paths are correctly prefixed in the built HTML.
  basePath: isProd ? '/projyotish' : '',
  assetPrefix: isProd ? '/projyotish/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
