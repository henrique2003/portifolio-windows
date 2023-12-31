module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/indent': 'off'
  }
}
