module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'plugin:prettier/recommended'],
  'no-unused-vars': [2, {args: 'all', argsIgnorePattern: '^_+'}],
};
