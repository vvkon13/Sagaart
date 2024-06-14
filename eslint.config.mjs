import eslintPluginReact from 'eslint-plugin-react';

export default {
  // Другие опции конфигурации...
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      test: 'readonly',
      expect: 'readonly',
      process: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    // Пример использования плагина react
    react: eslintPluginReact,
  },
  // Указание настроек плагина, если это необходимо
  settings: {
    react: {
      version: 'detect',
    },
  },
};