// https://github.com/google/gts/blob/release-v3.1.0/.prettierrc.json
module.exports = {
  rules: {
    'prettier/prettier': 'off',
    'space-in-parens': ['error', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'quotes': ['error', 'single'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
  },
};
