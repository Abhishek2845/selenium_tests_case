const {by, key, Builder} = require ("selenium-webdriver");
require("chromedriver");
const fs = require ("fs");
const { Driver } = require("selenium-webdriver/chrome");

async function scrape (){
    let drive = await new Builder(). forBrowser ("chrome").build();
    await Driver.get('https://radxup-colectiv-uat.azurewebsites.net/');

    var links = await drive .findElements(by.tagName("a"));
    for(let link of links){
        console.log (await link.getTest());
    }
    console.log('abhi')
}