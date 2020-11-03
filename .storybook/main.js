module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/preset-typescript',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register-panel',
    '@storybook/addon-viewport/register',
  ],
  webpackFinal: async (config, { configType }) => {
    // config.mode = 'development'
    return config
  },
};
