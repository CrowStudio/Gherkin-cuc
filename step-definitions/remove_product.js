const { waitAWhile } = require('../helpers/wait.js');

module.exports = function () {

  this.When(/^I click the minus button for a product in the shopping cart$/, async function () {
    let minusButton = await driver.findElement(By.css(''));
    await minusButton.click();
    await waitAWhile(true);
  });

  this.Then(/^one item of the product should be removed$/, async function () {
    
  
  });
  this.When(/^I change the quantity for a product to "0"$/, async function () {
    let zeroInput = await driver.findElement(By.css('input[name= "quantity-input]'));
    await zeroInput.sendKeys(selenium.Key.ENTER);
    await waitAWhile(true);

  });

  this.Then(/^the product should be removed from the shopping cart$/, async function () {
    
  });

}