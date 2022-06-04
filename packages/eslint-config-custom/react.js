module.exports = {
  extends: [
    'plugin:@next/next/recommended',
    require.resolve('./rules/react'),
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
};
