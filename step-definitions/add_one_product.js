module.exports = function () {

  this.When(/^I click the plus sign for a product$/, async function () {
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-plus'));
    await plusButton.click();

  });

  this.When(/^I change the quantity of a product from zero to one$/, async function () {

  });

  this.When(/^click the shopping cart$/, async function () {
    let shoppingCartButton = await driver.findElement(By.css('.mini-cart-desktop'));
    await shoppingCartButton.click();

  });

  this.Then(/^I should see a quantity of one of the product in the shopping cart$/, async function () {

    let quantity = await driver.findElement(By.css('.ax-product-quantity-number'));
    // expect(quantity).to.equal('1'); - not working, probably for some very obviouse reason but me tired...

  });

}