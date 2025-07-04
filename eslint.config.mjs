import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import tsParser from '@typescript-eslint/parser';

import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import fsPlugin from '@conarti/eslint-plugin-feature-sliced';
import sortDestructurePlugin from 'eslint-plugin-sort-destructure-keys';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import noRelativeImportPathsPlugin from 'eslint-plugin-no-relative-import-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    env: {
      browser: true,
      es2021: true,
    },
  },
});

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
    'plugin:@conarti/feature-sliced/rules'
  ),

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      import: importPlugin,
      react: reactPlugin,
      '@typescript-eslint': tsPlugin,
      '@conarti/feature-sliced': fsPlugin,
      'sort-destructure-keys': sortDestructurePlugin,
      'simple-import-sort': simpleImportSortPlugin,
      'no-relative-import-paths': noRelativeImportPathsPlugin,
    },
    rules: {
      '@conarti/feature-sliced/layers-slices': 'warn',
      '@conarti/feature-sliced/absolute-relative': 'warn',
      '@conarti/feature-sliced/public-api': 'warn',
      'no-console': 'warn',
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      'import/newline-after-import': ['error', { count: 1 }],
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      '@typescript-eslint/no-unused-vars': 'warn',
      'arrow-body-style': 'warn',
      'arrow-parens': ['warn', 'always'],
      'import/extensions': [
        'error',
        'never',
        {
          js: 'never',
          json: 'always',
          jsx: 'never',
          png: 'always',
          scss: 'always',
          svg: 'always',
          ts: 'never',
          tsx: 'never',
          webp: 'always',
        },
      ],
      'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'jsx-quotes': [1, 'prefer-double'],
      'no-extra-semi': 'off',
      'no-magic-numbers': [
        'warn',
        {
          ignore: [0, 1, -1],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
        },
      ],
      'no-relative-import-paths/no-relative-import-paths': 'off',
      'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg', '.webp', '.json'] }],
      'react/jsx-indent': 'off',
      'react/jsx-indent-props': [2, 2],
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react/self-closing-comp': ['warn', { component: true, html: true }],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react', '^@?\\w'],
            ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.s?css$'],
          ],
        },
      ],
      'sort-destructure-keys/sort-destructure-keys': 'warn',
    },
  },

  {
    files: ['app/**/*', '.eslintrc.{js,cjs}'],
    languageOptions: {
      env: { node: true },
      sourceType: 'script',
    },
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },

  {
    files: ['src/shared/**/*', 'app/**/*'],
    rules: {
      '@conarti/feature-sliced/absolute-relative': 'off',
    },
  },
];