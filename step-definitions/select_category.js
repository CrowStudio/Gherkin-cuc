const { waitAWhile } = require('../helpers/wait.js');

module.exports = function () {
  let sideNav;
  let category;

  this.Given(/^there is no side-menu open$/, async function () {
    sideNav = await driver.findElements(By.css('.left-menu-btn-closed'));
  });

  this.When(/^I click Meny$/, async function () {
    if (sideNav.length === 1) {
      let menuButton = await driver.findElement(By.css('.ax-toolbar-btn'));
      await menuButton.click();
    }
  });

  this.When(/^I click "([^"]*)"$/, async function (sort) {
    let categoryButton = await driver.findElement(By.css('[href="/sortiment/' + sort + '"]'));
    await driver.executeScript('document.querySelector(\'[href="/sortiment/' + sort + '"]\').scrollIntoView()');
    category = sort;
    await categoryButton.click();
  });

  this.When(/^thereafter click "([^"]*)"$/, async function (subSort) {
    await driver.wait(until.elementsLocated(By.css('[href="/sortiment/' + category + '/' + subSort + '"]')), 20000);
    let subCatButton = await driver.findElement(By.css('[href="/sortiment/' + category + '/' + subSort + '"]'));
    await driver.executeScript('document.querySelector(\'[href="/sortiment/' + category + '/' + subSort + '"]\').scrollIntoView()');
    await subCatButton.click();
    await waitAWhile(true);
  });

  this.Then(/^I should be at "([^"]*)"$/, async function (Url) {
    let siteURL = await (await driver.findElement(By.css('[rel="canonical"]'))).getAttribute("href");;
    expect(siteURL).to.equal(Url);
  });
}
