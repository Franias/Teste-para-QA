const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const {Builder, By, until} = require('selenium-webdriver');
// const {simulationPageObjects} = require('../../page-objects/simulation-page.js');

let driver = new Builder().forBrowser('chrome').build();

module.exports = function () {
    this.Given(/^I visit Test Cookbook website$/, function() {
      return this.driver.get('http://www.testcookbook.com');
    });
  
    this.Then(/^I see title Test Cookbook$/, function() {
      this.driver.getTitle().then(function (title) {
        assert.equal(title, "Test Cookbook");
        return title;
      });
    });
}