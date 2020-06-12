module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-console': 2,
        'eol-last': [
            'error',
            'always',
        ],
        'no-debugger': 2,
        'no-dupe-else-if': 2,
        'no-dupe-keys': 2,
        'no-empty': 2,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-irregular-whitespace': 2,
        'no-unreachable': 2,
        'keyword-spacing': [
            "error",
            {"before": true}
        ]
    }
};