var seleniumWebdriver = require('selenium-webdriver');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
                  .forBrowser('chrome')
                  .build();
}

module.exports = function() {
  this.World = CustomWorld;
  //default timeout to 30 seconds
  this.setDefaultTimeout(30 * 1000);
};