const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl: "https://www.demoblaze.com/",
    video: true, // Enable video recording for tests in headless mode
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      runMode: 3,
      openMode: 1,
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', 
    overwrite: false,            // Append to existing report files
    html: true,                  // Generate HTML reports
    json: true,                  // Generate JSON reports
    charts: true                 // Include charts in the report
  }
});
