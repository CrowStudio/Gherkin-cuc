const { waitAWhile } = require('../helpers/wait.js');

module.exports = function () {
  let prodName;

  this.When(/^I click the plus sign on the next product$/, async function(){
    await waitAWhile(true);
    let plusButton = await driver.findElements(By.css('.ax-product-quantity-plus'))
    await plusButton[1].click();
    prodName = await driver.findElements(By.css('.ax-product-title'));
    prodName = await prodName[1].getText();
    console.log(prodName);
    await waitAWhile(true);
  });

  this.When(/^I click the minus button for a product in the shopping cart$/, async function () {
    let minusButton = await driver.findElement(By.css('.md-3-line'));
    minusButton = await minusButton.findElement(By.css('.selenium--product-quantity-remove-from-cart-btn'));
    await minusButton.click();
    await waitAWhile(true);
  });
  
  this.When(/^I change the quantity for a product to 0$/, async function () {
    let zeroInput = await driver.findElement(By.css('.md-3-line'));
    zeroInput = zeroInput.findElement(By.css('input[name="quantity"]'));
    await zeroInput.sendKeys(selenium.Key.CONTROL + "a");
    await zeroInput.sendKeys(selenium.Key.DELETE);
    await zeroInput.sendKeys(0, selenium.Key.ENTER);
    await waitAWhile(true);

  });

  this.When(/^I click the Gå till kassan-button$/, async function(){
    let checkOut = await driver.findElement(By.css('.ax-btn-primary.md-button.md-ink-ripple'));
    await checkOut.click();
    await waitAWhile(true);

  });

  this.When(/^click the X-button$/, async function(){
    let xButton = await driver.findElements(By.css('.ax-product-remove'));
    await xButton[1].click();
    await waitAWhile();
    let comfirm = await driver.findElements(By.css('.ax-btn-primary.md-button'));
    await comfirm[1].click();
    await waitAWhile(true);

  });

  this.Then(/^the product shall be removed from the shopping cart$/, async function () {
    let shopCartList = await driver.findElement(By.css('.md-3-line'));
    shopCartList = await (await shopCartList.findElement(By.css('h3')).getText());
    console.log(shopCartList);
    expect(shopCartList).to.not.equal(prodName);
  });

}