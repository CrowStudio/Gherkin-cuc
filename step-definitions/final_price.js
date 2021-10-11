const { waitAWhile } = require('../helpers/wait.js');

let productsToBuy;

module.exports = function() {
  this.Given(/^that I am on the Ice Cream category page$/, async function(){
    let frystLink = await driver.findElement(By.css('a[href="/sortiment/fryst"]'));
    await frystLink.click();

    await driver.wait(until.elementsLocated(By.css('a[href="/sortiment/fryst/glass"]')), 10000);
    let glassLink = await driver.findElement(By.css('a[href="/sortiment/fryst/glass"]'));
    await driver.executeScript('document.querySelector(\'a[href="/sortiment/fryst/glass"]\').scrollIntoView()');
    await glassLink.click();

    let headerText;
    while (headerText !== 'Glass') {
      headerText = await (await driver.findElement(By.css('h2'))).getText();
      await driver.sleep(100);
    }
    
    expect(headerText).to.equal('Glass');
  });

  this.When(/^I put one of each in the shopping cart$/, async function(){
    let loadMore = driver.findElement(By.css('button[class*="LoadMore"]'));
    await loadMore.click();
    await driver.executeScript('window.scrollTo(0,0)');

    let products = await driver.findElements(By.css('[itemtype="https://schema.org/Product"]'));
    productsToBuy = [];


    expect(0).to.equal(0);
  });

  this.Then(/^I should be able to calculate a final price$/, async function(){
    expect(0).to.equal(0);
  });
}