const { waitAWhile } = require('../helpers/wait.js');
const { getOs } = require('../helpers/os.js');

module.exports = function () {
  
  let quantityBeforeChange;
  
  this.When(/^I click the plus sign in the shopping cart$/, async function() {
    quantityBeforeChange = +(await (await driver.findElement(By.css('.md-3-line input[name="quantity"]'))).getAttribute("value"));
    let plusButton = await driver.findElement(By.css('.md-3-line .selenium--product-quantity-add-to-cart-btn'));
    await plusButton.click();
    await waitAWhile(true);
  });

  this.When(/^I click the minus sign in the shopping cart$/, async function() {
    quantityBeforeChange = +(await (await driver.findElement(By.css('.md-3-line input[name="quantity"]'))).getAttribute("value"));
    let minusButton = await driver.findElement(By.css('.md-3-line .selenium--product-quantity-remove-from-cart-btn'));
    await minusButton.click();
    await waitAWhile(true);
  });

  this.When(/^I change the number directly in quantity to a random number$/, async function() {
    quantityBeforeChange = +(await (await driver.findElement(By.css('.md-3-line input[name="quantity"]'))).getAttribute("value"));
    let quantity = Math.floor(Math.random() * 6 + 5);
    let quantityInput = await driver.findElement(By.css('.md-3-line input[name="quantity"]'));
    let os = await driver.getCapabilities().then(function(capabs) { return capabs.get('platform'); });
    let osKey = await getOs(os);
    await quantityInput.sendKeys(osKey + 'a');
    await quantityInput.sendKeys(selenium.Key.DELETE);
    await quantityInput.sendKeys(quantity, selenium.Key.ENTER);
    await waitAWhile(true);
  });

  this.Then(/^the quantity should change$/, async function() {
    let newQuantity = +(await (await driver.findElement(By.css('.md-3-line input[name="quantity"]'))).getAttribute("value"));
    expect(quantityBeforeChange).to.not.equal(newQuantity);
    await waitAWhile(true);
  });


  this.When(/^I change the quantity of a product to a random letter$/, async function() {
    quantityBeforeChange = +(await (await driver.findElement(By.css('.md-3-line input[name="quantity"]'))).getAttribute("value"));
    let alphabet = "abcdefghijklmnopqrstuvwxyz??????"
    let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    let quantityInput = await driver.findElement(By.css('.md-3-line input[name="quantity"]'));
    let os = await driver.getCapabilities().then(function(capabs) { return capabs.get('platform'); });
    let osKey = await getOs(os);
    await quantityInput.sendKeys(osKey + 'a');
    await quantityInput.sendKeys(selenium.Key.DELETE);
    await quantityInput.sendKeys(randomLetter, selenium.Key.ENTER);
    await waitAWhile(true);
  });

  this.Then(/^the quantity should remain the same as before$/, async function() {
    let quantity = +(await (await driver.findElement(By.css('.md-3-line input[name="quantity"]'))).getAttribute("value"));
    await waitAWhile(true);
    expect(quantity).to.equal(quantityBeforeChange);
  });

}