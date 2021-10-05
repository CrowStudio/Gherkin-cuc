const { waitAWhile } = require('../helpers/wait.js');

module.exports = function () {
  let sideNav
  this.Given(/^there is no side-menu open$/, async function () {
    sideNav = await driver.findElements(By.css('.left-menu-btn-closed'));
  });

  this.When(/^I click Meny$/, async function () {
    if (sideNav.length === 1) {
      let menuButton = await driver.findElement(By.css('button.ax-toolbar-btn'));
      await menuButton.click();
      await waitAWhile(true);
    }
  });

  /*   this.When(/^I click "([^"]*)"$/, async function (Sort) {
  
    } */
}