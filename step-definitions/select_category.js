module.exports = function () {
  this.When(/^I click Meny$/, async function () {

    let menuButton = await driver.findElement(by.css('.MenuButtonstyles__StyledMenuButton-sc-hxepwf-0'));

    await menuButton.click();
  });
}