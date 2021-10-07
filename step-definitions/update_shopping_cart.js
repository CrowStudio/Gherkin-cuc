const { waitAWhile } = require('../helpers/wait.js');

module.exports = function () {
  
  let quantityBeforeChange;
  
  this.When(/^I click the plus sign in the shopping cart$/, async function() {
    quantityBeforeChange = +(await (await driver.findElement(By.css('input[name="quantity"]'))).getAttribute("value"));
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-plus'));
    await plusButton.click();
    await waitAWhile(true);
  });

  this.When(/^I click the minus sign in the shopping cart$/, async function() {
    quantityBeforeChange = +(await (await driver.findElement(By.css('input[name="quantity"]'))).getAttribute("value"));
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-minus'));
    await plusButton.click();
    await waitAWhile(true);
  });

  this.When(/^I change the number directly in quantity to a random number$/, async function () {
    quantityBeforeChange = +(await (await driver.findElement(By.css('input[name="quantity"]'))).getAttribute("value"));
    let quantity = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    let quantityInput = await driver.findElement(By.css('input[name="quantity"]'));
    await quantityInput.sendKeys(selenium.Key.CONTROL + "a");
    await quantityInput.sendKeys(selenium.Key.DELETE);
    await quantityInput.sendKeys(quantity, (selenium.Key.ENTER));
    await waitAWhile(true);
  });

  this.Then(/^the quantity should change$/, async function () {
    let newQuantity = +(await (await driver.findElement(By.css('input[name="quantity"]'))).getAttribute("value"));
    expect(quantityBeforeChange).to.not.equal(newQuantity);

    //console.log('old number ' + quantityBeforeChange);
    //console.log('new number ' + newQuantity);

    await waitAWhile(true);
  });

}