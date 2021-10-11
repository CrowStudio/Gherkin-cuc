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

  this.When(/^I click the minus button twice for a product in the shopping cart$/, async function () {
    let minusButton = await driver.findElement(By.css('.selenium--product-quantity-remove-from-cart-btn'));
    await minusButton.click();
    //ta bort denna, ska ju bara ha en
    await minusButton.click();
    await waitAWhile(true);
    //fult som stryk - med loop
  });
  
  this.When(/^I change the quantity for a product to 0$/, async function () {
    let zeroInput = await driver.findElement(By.css('input[name = "quantity"]'));
    await zeroInput.sendKeys(selenium.Key.CONTROL + "a");
    await zeroInput.sendKeys(selenium.Key.DELETE);
    await zeroInput.sendKeys(0, selenium.Key.ENTER);
    await waitAWhile(true);

  });

  //la till denna med
  this.When(/^I click the Gå till kassan-button$/, async function(){
    let checkOut = await driver.findElement(By.css('.ax-btn-primary.md-button.md-ink-ripple'));
    await checkOut.click();
    await waitAWhile(true);

  });
//och denna jäveln
  this.When(/^click the X-button$/, async function(){
    let xButton = await driver.findElement(By.css('.ax-product-remove'));
    await xButton.click();
    await waitAWhile();

  });

  this.Then(/^the product shall be removed from the shopping cart$/, async function () {
    let shopCartList = await (await driver.findElement(By.css('.cart-mini-list')).getText());
    expect(shopCartList).to.not.equal(prodName);
   

      //"Ägg 10p Frigående Utomhus M / l");
    
  });

}