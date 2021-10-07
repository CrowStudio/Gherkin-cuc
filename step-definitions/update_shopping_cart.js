const { waitAWhile } = require('../helpers/wait.js');

module.exports = function() {
  
  this.When(/^I click the plus sign in the shopping cart$/, async function() {
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-plus'));
    await plusButton.click();
    await waitAWhile(true);
  });

  this.When(/^I click the minus sign in the shopping cart$/, async function() {
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-minus'));
    await plusButton.click();
    await waitAWhile(true);
  });

  this.When(/^I change the number directly in quantity to a random number$/, async function () {
    let quantity = (Math.floor(Math.random() * 5) + 1);
    let quantityInput = await driver.findElement(By.css('input[name="quantity"]'));
    await quantityInput.sendKeys(selenium.Key.CONTROL + "a");
    await quantityInput.sendKeys(selenium.Key.DELETE);
    await quantityInput.sendKeys(quantity, (selenium.Key.ENTER));
    await waitAWhile(true);
  });

}