// @ts-ignore
module.exports = {
    env: { browser: true },
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint'
    ],
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    rules: {
        'prettier/prettier': ['error', { singleQuote: true }],
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        semi: ['error', 'never'],
        'react-hooks/rules-of-hooks': 'error',
        '@typescript-eslint/explicit-function-return-type': 0,
        'import/no-unresolved': 0
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    }
}
