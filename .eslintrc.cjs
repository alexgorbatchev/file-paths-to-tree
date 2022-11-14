/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-console
console.log('⚙️  Using ESLint config from `.eslintrc.cjs`');

const { join } = require('path');
const privateRulesPlugin = require('eslint-plugin-private-rules/index.cjs');

privateRulesPlugin.RULES_DIR = join(__dirname, 'eslint');

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'private-rules', 'no-only-tests'],
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  env: {
    // browser: true,
    node: true,
    jasmine: true,
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
  rules: {
    'private-rules/logger': 'warn',

    camelcase: 'off',

    'global-require': 'off',
    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'max-classes-per-file': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-underscore-dangle': 'off',

    'no-await-in-loop': 'off',
    'no-console': 'error',
    'no-continue': 'off',
    'no-extra-label': 'off',
    'no-irregular-whitespace': ['error', { skipComments: true }],
    'no-labels': 'off',
    'no-loop-func': 'off',
    'no-multi-str': 'off',
    'no-only-tests/no-only-tests': 'error',
    'no-restricted-globals': 'off',
    'no-restricted-syntax': 'off',
    'no-return-await': 'off',
    'no-shadow': 'off',
    'no-unneeded-ternary': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'operator-assignment': 'off',
    'require-await': 'error',
    'spaced-comment': 'off',
    'symbol-description': 'off',

    'require-jsdoc': 'off',

    'import/no-unresolved': 'off',
    'import/extensions': ['off', 'always', { js: 'never', mjs: 'never' }],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
  },
};
