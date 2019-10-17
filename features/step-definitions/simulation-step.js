const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const {Builder, By, until} = require('selenium-webdriver');

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
        const input = 2000;
        this.driver.findElement(By.name('valorAplicar')).sendKeys(input);
    });

    this.When('I would save R${int} for months', function(input) {
        const input = 2000;

        this.driver.findElement(By.name('valorInvestir')).sendKeys(input);
        return this.driver.wait(until.elementLocated(By.id('periodo')), 1000).click();
    });
    this.Then(/^I could simulate with success$/, function() {
        this.driver.findElement(By.xpath('//*[@id="formInvestimento"]/div[5]/ul/li[2]/button')).click();
    });
}