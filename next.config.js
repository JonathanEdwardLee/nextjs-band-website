const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'leadershipclass.myshopify.com',
      },
      // Remove the YouTube entry if it exists
    ],
  },
  webpack: (config) => {
    if (config.externals) {
      config.externals = [...config.externals, { canvas: 'canvas' }];
    } else {
      config.externals = [{ canvas: 'canvas' }];
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
