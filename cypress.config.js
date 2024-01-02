const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 680,
    defaultCommandTimeout: 50000,

    // baseUrl: "https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/",
    // env:{
    //   email:'fendiriawan@gmail.com',
    //   password:'berjalan#12345',
    // } Punya Fajriansyah
  },
});