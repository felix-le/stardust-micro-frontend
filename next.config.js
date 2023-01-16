const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'hub',
        remotes: {
          news: `news@http://localhost:3001/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        // exposes whole files in src/components folder with its name as key and path as value
        // exposes: {
        //   './components/(.*)': './src/components/$1',
        // },

        exposes: {
          './footer': './src/components/footer.tsx',
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
