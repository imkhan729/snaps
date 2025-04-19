/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  // Configure webpack for optimization
  webpack: (config: any, { dev, isServer }: { dev: boolean, isServer: boolean }) => {
    // Only run in production builds
    if (!dev) {
      // Optimize CSS
      if (!isServer) {
        config.optimization.splitChunks.cacheGroups = {
          ...config.optimization.splitChunks.cacheGroups,
          styles: {
            name: 'styles',
            test: /\.(css|scss)$/,
            chunks: 'all',
            enforce: true,
          },
        };
      }
    }
    return config;
  },
};

export default nextConfig;
