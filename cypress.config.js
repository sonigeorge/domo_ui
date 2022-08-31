const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pufnae',
  e2e: {
    baseUrl: 'https://qa-recruitment-project.herokuapp.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
