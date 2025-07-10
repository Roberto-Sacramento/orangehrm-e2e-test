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
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    screenshots: "cypress/screenshots",
    videos: "cypress/videos"
  },
});


