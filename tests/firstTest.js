// Require node module Selenium Webdriver
const {Builder, By, Key} = require ("selenium-webdriver");
var should = require("chai").should();

async function example(){

//launch the browser
let driver = await new Builder().forBrowser("firefox").build();

//navigate to our location
await driver.get("https://lambdatest.github.io/sample-todo-app/");

//add a todo
await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

//assert using chai .should
todoText.should.equal("Learn javascript");


//close the browser
await driver.quit();

};
example();
