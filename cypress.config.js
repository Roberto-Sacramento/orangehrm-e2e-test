const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  projectId: 'rzhsjf',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/tests/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/",
  },
});


