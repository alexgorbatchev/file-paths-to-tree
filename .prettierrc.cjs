// eslint-disable-next-line no-console
console.log('⚡ Using Prettier config from `.prettierrc.cjs`');

module.exports = {
  parser: 'typescript',
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.js', '*.cjs', '*.mjs'],
      options: { parser: 'typescript' },
    },
    {
      files: ['*.json'],
      options: { parser: 'json' },
    },
  ],
};
