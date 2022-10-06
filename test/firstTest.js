// Require node module Selenium Webdriver
const {Builder, By, Key} = require ("selenium-webdriver");
//pre-mocha variable
//const assert = require ("assert");
var should = require("chai").should();

//describe block
describe("add todo tests", function(){
    //it block
    it("successfully adds a todo", async function(){
        //launch the browser
        let driver = await new Builder().forBrowser("firefox").build();

        //navigate to our location
        await driver.get("https://lambdatest.github.io/sample-todo-app/");

        //add a todo
        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

        //assert
        let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
        return value
        });

        //assert using chai .should
        todoText.should.equal("Learn Selenium");


        //close the browser
        await driver.quit();
        });
    });







//pre-mocha function
//async function example(){



//pre-mocha function
//example();
