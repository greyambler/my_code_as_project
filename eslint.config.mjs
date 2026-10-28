import globals from 'globals';
import { defineConfig } from 'eslint/config';
import jest from 'eslint-plugin-jest';
import js from '@eslint/js';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      ...js.configs.recommended.rules,
      "semi": ["error", "always"]
    },
  },
  {
    files: ['src/**/*.test.js'],
    ...jest.configs['flat/recommended'],
  },
  {
    ignores: ['**/temp.js', 'config/*', '**/*.config.*', '**/*.mjs'],
  },
]);
