module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-docs',
    // '@storybook/addon-a11y',
    '@storybook/addon-actions',
    "@storybook/addon-essentials",
    '@storybook/addon-interactions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-controls',
    '@storybook/addon-jest',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'), // eslint-disable-line global-require
        },
      },
    },
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    "@storybook/preset-create-react-app",
  ],
  features: {
    interactionsDebugger: true,
  }
}