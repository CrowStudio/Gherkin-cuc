const { waitAWhile } = require('../helpers/wait.js');
module.exports = function () {

  this.When(/^I click the plus sign to add a product$/, async function () {
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-plus'));
    await plusButton.click();

  });

  this.When(/^click the plus sign of the same product again$/, async function () {
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-plus'));
    await plusButton.click();
  });

  this.Then(/^the products is added to my shopping cart$/, async function () {
    await waitAWhile(true);
    let quantity = await driver.findElement(By.css('.mini-cart-desktop'));
    await quantity.click();

    // expect(quantity).to.equal(2);
  });
  this.Then(/^I can verify that its more than one$/, async function () {
    await waitAWhile(true);
    let total = await driver.findElement(By.css('.ax-product-quantity-number'));
    expect(total).to.be.at.least(2);
  });

}