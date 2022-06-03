module.exports = {
  extends: 'google',
  rules: {
    'max-len': ['error', { code: 120 }],
    'require-jsdoc': 'off',
    // https://eslint.org/docs/rules/semi
    'semi': 'error',
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': ['error', 'always', { arraysInObjects: true }]
  },
};
