const { waitAWhile } = require('../helpers/wait.js');

module.exports = function () {

  this.When(/^I click the plus sign for a product$/, async function () {
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-plus'));
    await plusButton.click();
    await waitAWhile(true);
  });

  this.When(/^I change the quantity of a product from zero to "([^"]*)"$/, async function (quantity) {
    let quantityInput = await driver.findElement(by.css('input[name="quantity"]'));
    await quantityInput.sendKeys(quantity);
    await waitAWhile(true);
  });

  this.When(/^press the enter key$/, async function () {
    let quantityInput = await driver.findElement(by.css('input[name="quantity"]'));
    await quantityInput.sendKeys(selenium.Key.ENTER);
    await waitAWhile(true);
  });

  this.When(/^click the ok button$/, async function () {
    let okButton = await driver.findElement(By.css('.ax-product-quantity-ok'));
    await okButton.click();
    await waitAWhile(true);
  });

  //this.When(/^click the shopping cart$/, async function () {
  //let shoppingCartButton = await driver.findElement(By.css('.mini-cart-desktop'));
  //await shoppingCartButton.click();
  //});

  this.Then(/^I should see a quantity of one of the product in the shopping cart$/, async function () {

  });

}