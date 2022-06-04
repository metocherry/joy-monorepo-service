const glob = require('glob');
const path = require('path');

const root = path.resolve(__dirname, '../');

const findStories = () => {
  return glob
    .sync(`${root}/**/*.stories.@(js|jsx|ts|tsx|mdx)`, {
      ignore: `${root}/**/node_modules/**/*.stories.@(js|jsx|ts|tsx|mdx)`,
    });
};

module.exports = {
  stories: async (list) => [...list, ...findStories()],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  }
}
