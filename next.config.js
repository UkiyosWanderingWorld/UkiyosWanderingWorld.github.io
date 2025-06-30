/** @type {import('next').nextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/UkiyosWanderingWorld.github.io',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});


module.exports = withMDX(nextConfig);
