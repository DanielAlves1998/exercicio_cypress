const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/relatorio',
    overwrite: true, //aq é para se fizer mais de um teste o sistema não crie mais um arquivo
    html: true,
    json: false,
    timestamp: 'ddmmyyyy__HHMMss'
  }
});
