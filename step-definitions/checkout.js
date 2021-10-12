const { waitAWhile } = require('../helpers/wait.js');

module.exports = function() {

  this.When(/^we should have a price higher than zero$/, async function() {
    let price = await (await driver.findElement(By.css('#selenium--miniCart-total-amount'))).getText();
    price = price.substring(0, price.length - 3).replace(',', '.');
    expect(price).to.be.above(0);
  });

  this.When(/^we click the gå till kassan button$/, async function() {
    let checkoutButton = await driver.findElement(By.css('.ax-btn-primary.md-button.md-ink-ripple'));
    await checkoutButton.click(); 
  });

  this.Then(/^we should see the checkout screen$/, async function() {
    await waitAWhile(true);

    await driver.wait(until.elementLocated(By.css('.header-text')), 10000);
    cartText = await (await driver.findElement(By.css('.header-text'))).getText();
    expect(cartText).to.equal('Varukorg');
  });
  
}