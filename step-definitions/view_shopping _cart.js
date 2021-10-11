const { waitAWhile } = require('../helpers/wait.js');

module.exports = function () {

  this.When(/^I click the shopping cart$/, async function () {
    let shopCartButton = await driver.findElement(By.css('.mini-cart-desktop'));
    await shopCartButton.click();
    await waitAWhile(true);
  });

  this.Then(/^I should see the added products in my shopping cart$/, async function () {
    let shopCartList = await (await driver.findElement(By.css('.cart-mini-list')).getText());
    await waitAWhile(true);
    expect(shopCartList.length).to.not.equal(19);
    await waitAWhile(true);
  });

}