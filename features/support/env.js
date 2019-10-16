var seleniumWebdriver = require('selenium-webdriver');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
                  .forBrowser('chrome')
                  .build();
}

module.exports = function() {
  this.World = CustomWorld;

  // sets a default timeout to 30 seconds.  Time is in ms.
  this.setDefaultTimeout(30 * 1000);
};