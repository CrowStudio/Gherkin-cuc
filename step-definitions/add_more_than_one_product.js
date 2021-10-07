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

  this.Then(/^I can verify there is more than one product$/, async function () {
    await waitAWhile(true);
    let totalQuantity = +(await (await driver.findElement(By.css('#selenium--cart-badge-total-unit-count'))).getText());
    expect(totalQuantity).to.be.at.least(2);
    await waitAWhile(true);

  });
  this.Then(/^I should see a quantity of 100 of the product in the shopping cart$/, async function () {
    await waitAWhile(true);
    let totalQuantity = +(await (await driver.findElement(By.css('#selenium--cart-badge-total-unit-count'))).getText());
    expect(totalQuantity).to.equal(100);
    await waitAWhile(true);

  });

  this.Then(/^I should see a quantity of 999 of the product in the shopping cartt$/, async function () {
    await waitAWhile(true);
    let totalQuantity = +(await (await driver.findElement(By.css('#selenium--cart-badge-total-unit-count'))).getText());
    expect(totalQuantity).to.equal(999);
    await waitAWhile(true);

  });

}