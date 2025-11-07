// eslint.config.js
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';
import vueParser from 'vue-eslint-parser';

export default [
  {
    files: ['**/*.{vue,js,ts}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: {
          ts: '@typescript-eslint/parser',
        },
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      vue,
      prettier,
    },
    // نستخدم القواعد الموصى بها بالطريقة الجديدة (Vue 3)
    rules: {
      ...vue.configs['flat/recommended'].rules,

      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'warn',
      eqeqeq: 'error',
      'no-console': 'warn',
      curly: 'error',
      'no-duplicate-imports': 'error',
      indent: ['error', 2],

      'prettier/prettier': [
        'error',
        {
          printWidth: 100,
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: true,
          arrowParens: 'always',
          endOfLine: 'auto',
        },
      ],
    },
  },
];
