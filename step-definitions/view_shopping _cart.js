const { waitAWhile } = require('../helpers/wait.js');
module.exports = function () {

  this.When(/^I click the shopping cart$/, async function () {
    let shopCartButton = await driver.findElement(By.css('.mini-cart-desktop-btn'));
    await shopCartButton.click();

  });

  this.Then(/^I should see the added products in my shopping cart$/, async function () {

  });

}