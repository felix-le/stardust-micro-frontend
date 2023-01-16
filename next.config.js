const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const glob = require('glob');
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
        exposes: {
          ...glob.sync('./src/components/**/*.tsx').reduce((acc, file) => {
            const key = file.replace('./src/', './').replace('.tsx', '');
            acc[key] = file;
            return acc;
          }, {}),
          ...glob.sync('./src/pages/**/*.tsx').reduce((acc, file) => {
            const key = file.replace('./src/', './').replace('.tsx', '');
            acc[key] = file;
            return acc;
          }, {}),
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
