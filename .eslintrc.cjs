module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: [],
  rules: {
  },
}