module.exports = {
  root: true,
  extends: ['custom', 'custom/react', 'custom/typescript', 'plugin:storybook/recommended'],
  rules: {
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
    'node/no-unpublished-import': 'off',
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': 'off',
  },
};
