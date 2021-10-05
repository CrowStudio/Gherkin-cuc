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

  this.When(/^I click "([^"]*)"$/, async function (Sort) {
    let categoryButton = await driver.findElement(By.css('[href="/sortiment/' + Sort + '"]'));
    await categoryButton.click();
    await waitAWhile(true);
  });

  this.When(/^thereafter click "([^"]*)"$/, async function (SubSort) {
    await driver.wait(until.elementsLocated(by.css('[href="/sortiment/' + SubSort + '"]')), 20000);
    let subCatButton = await driver.findElement(By.css('[href="/sortiment/' + SubSort + '"]'));
    await subCatButton.click();
    await waitAWhile(true);
  });
}