module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:perfectionist/recommended-natural',
        'plugin:import/recommended',
        'plugin:regexp/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@next/next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'unused-imports',
        'perfectionist',
        'regexp',
        'react-hooks',
        '@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': ['warn', { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' }],
        'arrow-parens': ['warn', 'always'],
        indent: ['warn', 4, { SwitchCase: 1 }],
        'object-curly-spacing': ['warn', 'always'],
        'quote-props': ['warn', 'as-needed'],
        quotes: ['warn', 'single', { avoidEscape: true }],
        'react/react-in-jsx-scope': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        // 'react-hooks/exhaustive-deps': ['warn', { enableDangerousAutofixThisMayCauseInfiniteLoops: true }],
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['warn', { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' }],
    },
    settings: {
        'import/ignore': ['react-navigation'],
        'import/resolver': {
            alias: {
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
                map: [
                    ['utils', '@/lib/utils'],
                    ['components', '@/components'],
                ],
            },
            typescript: {
                alwaysTryTypes: true,
            },
        },
        react: {
            version: 'detect',
        },
    },
};
