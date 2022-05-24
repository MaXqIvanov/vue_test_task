const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      'http://localhost:8080/regist': {
        target: 'http://dev1.itpw.ru:8013/accounts/authentication/reg/',
        changeOrigin: true,
      },
      'http://localhost:8080/login': {
        target: 'https://dev1.itpw.ru:8013/accounts/authentication/auth/',
        changeOrigin: true,
      },
      'http://localhost:8080': {
        target: 'http://dev1.itpw.ru:8013/todo/lists/',
        changeOrigin: true,
      },
    },
  },
});
