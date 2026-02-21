import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import tseslintParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import astro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import globals from 'globals';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,

  {
    files: ['**/*.tsx', '**/*.ts'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
      'react/function-component-definition': 'off',
      '@typescript-eslint/no-shadow': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-var-requires': 'warn',
      indent: ['error', 2, { SwitchCase: 1 }],
      'no-tabs': 'off',
      'react/prop-types': 'off',
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      // 'jsx-a11y/alt-text': 'off',
      'max-len': 'off',
      'security/detect-object-injection': 'off',
      'no-console': 'off',
      'no-useless-return': 'off',
      'global-require': 'off',
      'func-names': 'off',
      'no-shadow': 'off',
      'no-use-before-define': 'off',
      'no-param-reassign': 'off',
      'new-cap': 'off',
      'no-undef': 'off',
      'no-underscore-dangle': 'off',
      'no-prototype-builtins': 'off',
      'no-nested-ternary': 'off',
      'no-plusplus': 'off',
      'no-extra-boolean-cast': 'off',
      'spaced-comment': 'off',
      'no-restricted-properties': 'off',
      'no-restricted-syntax': 'off',
      'no-confusing-arrow': 'off',
      'no-case-declarations': 'off',
      'linebreak-style': 'off',
      // 'jsx-a11y/click-events-have-key-events': 'off',
      // 'jsx-a11y/anchor-has-content': 'off',
      // 'jsx-a11y/anchor-is-valid': 'off',
      // 'jsx-a11y/no-static-element-interactions': 'off',
      // 'jsx-a11y/mouse-events-have-key-events': 'warn',
      // 'jsx-a11y/no-onchange': 'warn',
      'react/jsx-key': 'warn',
      'react/display-name': 'warn',
      'react/no-unescaped-entities': 'off',
      'react/no-string-refs': 'off',
      'react/no-multi-comp': 'off',
      'react/sort-comp': 'off',
      'react/no-danger': 'off',
      'react/jsx-no-target-blank': 'off',
      'react/no-array-index-key': 'off',
      'react/jsx-filename-extension': 'off',
      'react/require-default-props': 'off',
      'react/forbid-prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/prefer-default-export': 'off',
      'import/no-named-as-default': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-unused-expressions': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'consistent-return': 'off',
      'react/no-unknown-property': 'off',
      'react/button-has-type': 'off',
      'react/jsx-no-constructed-context-values': 'off',
      // 'jsx-a11y/control-has-associated-label': 'off',
      camelcase: 'off',
    },
  },

  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslintParser,
        extraFileExtensions: ['.astro'],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      astro,
    },
    rules: {
      ...astro.configs.recommended.rules,
      'astro/no-conflict-set-directives': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'no-unused-expressions': 'off',
    },
  },
];
