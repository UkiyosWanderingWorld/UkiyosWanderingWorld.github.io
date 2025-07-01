const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').nextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};


module.exports = withMDX(nextConfig);
