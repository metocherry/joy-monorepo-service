module.exports = {
  extends: [
    'plugin:@next/next/recommended',
    require.resolve('./rules/react'),
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
};
