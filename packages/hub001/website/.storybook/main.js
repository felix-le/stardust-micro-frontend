module.exports = {
  stories: [
    // all packages  1
    '../../../../packages/**/website/src/**/*.stories.mdx',
    '../../../../packages/**/website/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
