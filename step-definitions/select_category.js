const { waitAWhile } = require('../helpers/wait.js');

module.exports = function() {
  let sideNav;

  this.Given(/^there is no side-menu open$/, async function() {
    sideNav = await driver.findElements(By.css('.left-menu-btn-closed'));
  });

  this.When(/^I click Meny$/, async function() {
    if(sideNav.length === 1) {
      let menuButton = await driver.findElement(By.css('button.ax-toolbar-btn'));
      await menuButton.click();
    }
  });

  this.When(/^I click "([^"]*)"$/, async function(sort) {
    let categoryButton = await driver.findElement(By.css('[href="/sortiment/' + sort + '"]'));
    await categoryButton.click();
  });

  this.When(/^thereafter click "([^"]*)"$/, async function(subSort) {
    await driver.wait(until.elementsLocated(By.css('[href="/sortiment/' + subSort + '"]')), 20000);
    let subCatButton = await driver.findElement(By.css('[href="/sortiment/' + subSort + '"]'));
    await subCatButton.click();
    await waitAWhile(true);
  });
}