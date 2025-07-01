const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').nextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/ukiyoswanderingworld',
  assetPrefix: '/ukiyoswanderingworld',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};


module.exports = withMDX(nextConfig);
