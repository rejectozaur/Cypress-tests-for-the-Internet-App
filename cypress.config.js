const { defineConfig } = require("cypress");
const {
  cypressBrowserPermissionsPlugin,
} = require("cypress-browser-permissions");

module.exports = defineConfig({
  env: {
    browserPermissions: {
      notifications: "allow",
      geolocation: "allow",
    },
  },
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com/",
    setupNodeEvents(on, config) {
      config = cypressBrowserPermissionsPlugin(on, config);
      return config;
    },
    experimentalStudio: true,
  },
});
