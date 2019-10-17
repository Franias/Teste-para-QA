const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const {Builder, By, until} = require('selenium-webdriver');
// const {simulationPageObjects} = require('../../page-objects/simulation-page.js');

let driver = new Builder().forBrowser('chrome').build();

module.exports = function () {
    this.Given(/^I visit the Investment Simulator page$/, function() {
      return this.driver.get('https://www.sicredi.com.br/html/ferramenta/simulador-investimento-poupanca/');
    });
  
    this.Then(/^I should see a simulation form$/, function() {
      return driver.wait(until.elementLocated(By.id('formInvestimento')), 1000);
    });

    this.When(/^I inform my profile <associate>$/, function() {
        this.driver.findElement(By.name('perfil')).click();
    //   .then(function (title) {
    //     assert.equal(title, "Test Cookbook");
    //     return title;
    //   });

    });    
    this.When('I would apply R${int}', function(input) {
        this.driver.findElement(By.name('valorAplicar')).sendKeys(input);
    });

    this.When('I would save R${int} for months', function(input) {
        this.driver.findElement(By.name('valorInvestir')).sendKeys(input);
        return driver.wait()
    });
    this.Then(/^I could simulate with success$/, function() {

    });
}