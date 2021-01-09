module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  printWidth: 80,
  trailingComma: 'none',
  arrowParens: 'avoid',
  semi: true,
  plugins: ['prettier-plugin-organize-imports'],
  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'angular'
      }
    }
  ]
};
