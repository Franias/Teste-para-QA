const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const {Builder, By, until} = require('selenium-webdriver');
const {simulationPageObjects} = require('../../page-objects/simulation-page.js');

let driver = new Builder().forBrowser('chrome').build();