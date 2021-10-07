const { waitAWhile } = require('../helpers/wait.js');

module.exports = function () {
  this.When(/^I click the white Töm-button in the shopping cart$/, async function () {
    let emptyButton = await driver.findElements(By.css('#selenium--miniCart-empty-cart-btn'));
    // await emptyButton.click();
    //await waitAWhile(true); 
  });

  this.When(/^then comfirming by clicking the red Töm-button$/, async function () {
    let confirmEmptyButton = await driver.findElements(By.css('.ax-button-primary'));
    await confirmEmptyButton.click();
    await waitAWhile(true);

  });

  this.Then(/^I should have an empty shopping cart$/, async function () {

  });


}



  //.ax-btn-primary     Töm