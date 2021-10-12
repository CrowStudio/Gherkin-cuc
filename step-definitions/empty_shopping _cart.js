const { waitAWhile } = require('../helpers/wait.js');

module.exports = function() {

  this.When(/^I click the white Töm-button in the shopping cart$/, async function() {
    let emptyButton = await driver.findElements(By.css('.ax-btn-secondary'));
    await emptyButton[1].click();
    await waitAWhile(true);

  });

  this.When(/^confirm by clicking the red Töm-button$/, async function() {
    let emptyButton = await driver.findElements(By.css('.ax-btn-primary.md-button.md-ink-ripple'));
    await emptyButton[1].click(); 
    await waitAWhile(true);
  });

  this.Then(/^I should have an empty shopping cart$/, async function() {
    let emptyCart = await (await driver.findElement(By.css('.selenium--miniCart-empty-text'))).getText();
    expect(emptyCart).to.equal("Din varukorg är tom!");
    await waitAWhile(true);
  });
  
 this.Then(/^the total price should be 0,00 kr$/, async function() {
   let totalAmount = await (await driver.findElement(By.css('.amount'))).getText();
   expect(totalAmount).to.equal("0,00 kr");
    await waitAWhile(true); 
  })

}