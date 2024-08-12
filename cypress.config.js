const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://provaqa.prc.rpe.tech:9080/desafioqa/",
    viewportWidth: 1920,
    viewportHeight: 1080,
    env: {
      username: 'admin',
      password: 'admin'
    },
    setupNodeEvents(on, config) {
      // Implementar event listeners aqui, se necessário
    },
  },
});
