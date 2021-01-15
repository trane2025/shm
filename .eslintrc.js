module.exports = {
    'env': {
        'browser': true,
        'es2017': true
    },
    'extends': 'plugin:react/recommended',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 8,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'quotes': ['error', 'single'],
        'no-var': 'error',
        'semi': 'error',
        'indent': 'error',
        'no-multi-spaces': 'error',
        'space-in-parens': 'error',
        'no-multiple-empty-lines': 'error',
        'prefer-const': 'error',
        'no-use-before-define': 'error'
    }
};