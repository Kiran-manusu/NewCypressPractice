module.exports = {

  env:{
    url: 'https://rahulshettyacademy.com/AutomationPractice/#/',    

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/*.js',
    defaultCommandTimeout: 20000,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    videosFolder: 'cypress/videos',
    chromeWebSecurity: false,
    projectId: "rivr5z"
  },
};
