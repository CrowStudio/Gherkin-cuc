const { waitAWhile } = require('../helpers/wait.js');

module.exports = function () {

  this.When(/^I click the minus button twice for a product in the shopping cart$/, async function () {
    let minusButton = await driver.findElement(By.css('.selenium--product-quantity-remove-from-cart-btn'));
    await minusButton.click();
    await minusButton.click();
    await waitAWhile(true);
  });
  
  this.When(/^I change the quantity for a product to "0"$/, async function () {
    let zeroInput = await driver.findElement(By.css(''));
    await zeroInput.sendKeys(selenium.Key.ENTER);
    await waitAWhile(true);

  });

  this.Then(/^the product shall be removed from the shopping cart$/, async function () {
    
  });

}