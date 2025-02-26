import pluginJs from "@eslint/js";
import importPlugin from 'eslint-plugin-import';
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{ts,tsx}'],
    },
    { 
        languageOptions: { 
            globals: globals.browser,
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2022,
                project: 'tsconfig.json',
            },
        } 
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    importPlugin.flatConfigs.recommended,
    {
        rules: {
            "no-unused-vars": "warn",
            '@typescript-eslint/camelcase': [0, 'error', { properties: 'never', allow: ['UNSAFE_componentWillMount'] }],
            '@typescript-eslint/no-unused-vars': 2,
            '@typescript-eslint/explicit-function-return-type': 0,
            '@typescript-eslint/no-explicit-any': 2,
            '@typescript-eslint/no-empty-interface': [
                1,
                {
                    allowSingleExtends: false,
                },
            ],
            'arrow-parens': 0,
            'class-methods-use-this': 0,
            'consistent-return': 0,
            'func-names': 0,
            'global-require': 0,
            'jsx-quotes': 0,
            'lines-between-class-members': 0,
            'no-case-declarations': 0,
            'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
            'no-debugger': 'error',
            'no-else-return': [2, { allowElseIf: true }],
            'no-empty-function': 0,
            'no-multi-spaces': [2, { exceptions: { ImportDeclaration: true, VariableDeclarator: true } }],
            'no-param-reassign': [2, { props: false }],
            'no-use-before-define': 0,
            'no-useless-constructor': 0,
            'prefer-destructuring': ['error', { object: true, array: false }],
            'react/destructuring-assignment': 0,
            'react/forbid-prop-types': 0,
            'react/jsx-closing-tag-location': 0,
            'react/jsx-curly-spacing': 0,
            'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
            'react/jsx-no-target-blank': 0,
            'react/jsx-one-expression-per-line': 0,
            'react/jsx-wrap-multilines': 0,
            'react/jsx-indent': [2, 4],
            'indent': [2, 4],
            'react/no-array-index-key': 0,
            'react/no-did-mount-set-state': 0,
            'react/no-unused-prop-types': 0,
            'react/prop-types': 0,
            'react/sort-comp': 0,
            'import/order': [
                'error',
                {
                    "groups": [
                        ['external'],
                        ['builtin'],
                        ['internal'],
                        ['parent', 'sibling', 'index'],
                    ],
                    "alphabetize": {
                        "order": "asc",
                        "caseInsensitive": true
                    },
                    "named": true,
                    "newlines-between": "always",
                },
            ],
            "import/no-named-as-default-member": "off",
            "import/no-unresolved": "off",
            "require-await": 'error',
            "newline-before-return": 'error',
            "@typescript-eslint/no-empty-object-type": 0,
            "no-prototype-builtins": 0,
            "no-extra-boolean-cast": 0,
            "no-unused-expressions": 0,
            "import/no-unused-modules": "error",
            "import/named": "off",
            "@typescript-eslint/no-unused-expressions": 0,
            "react/react-in-jsx-scope": "off"
        }
    }
];
