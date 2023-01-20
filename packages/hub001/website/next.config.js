const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const glob = require('glob');
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
  webpack: (config, options) => {
    const { isServer } = options;

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
        shared: {
          tailwindcss: {
            eager: true,
            singleton: true,
          },
        },
      })
    );

    return config;
  },
};
