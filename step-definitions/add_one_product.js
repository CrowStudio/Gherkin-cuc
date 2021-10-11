const { waitAWhile } = require('../helpers/wait.js');

module.exports = function() {

  this.When(/^I click the plus sign for a product$/, async function() {
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-plus'));
    await plusButton.click();
    await waitAWhile(true);
  });

  this.When(/^I change the quantity of a product from zero to "([^"]*)"$/, async function(quantity) {
    let quantityInput = await driver.findElement(By.css('input[name="quantity"]'));
    await quantityInput.sendKeys(selenium.Key.CONTROL + "a");
    await quantityInput.sendKeys(selenium.Key.DELETE);
    await quantityInput.sendKeys(quantity);
    await waitAWhile(true);
  });

  this.When(/^press the enter key$/, async function() {
    let quantityInput = await driver.findElement(By.css('input[name="quantity"]'));
    await quantityInput.sendKeys(selenium.Key.ENTER);
    await waitAWhile(true);
  });

  this.When(/^click the ok button$/, async function() {
    let okButton = await driver.findElement(By.css('.ax-product-quantity-ok'));
    await okButton.click();
    await waitAWhile(true);
  });

  this.Then(/^I should see a quantity of one in the mini shopping cart$/, async function() {
    let quantity = +(await (await driver.findElement(By.css('#selenium--cart-badge-total-unit-count'))).getText());
    expect(quantity).to.equal(1);
    await waitAWhile(true);
  });


  this.When(/^I change the quantity of a product from zero to a radom letter$/, async function () {
    let alphabet = "abcdefghijklmnopqrstuvwxyzåäö"
    let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    // console.log('random letter ' + randomLetter);

    let quantityInput = await driver.findElement(By.css('input[name="quantity"]'));
    await quantityInput.sendKeys(selenium.Key.CONTROL + "a");
    await quantityInput.sendKeys(selenium.Key.DELETE);
    await quantityInput.sendKeys(randomLetter);
    await waitAWhile(true);
  });

  this.Then(/^the quatity should remain zero$/, async function () {
    let quantity = +(await (await driver.findElement(By.css('input[name="quantity"]'))).getAttribute("value"));
    expect(quantity).to.equal(0);

    // console.log('quantity is ' + quantity);
  });

}