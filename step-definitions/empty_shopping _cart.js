const { waitAWhile } = require('../helpers/wait.js');

module.exports = function () {
  this.When(/^I click the white Töm-button in the shopping cart$/, async function () {
    let emptyButton = await driver.findElements(By.css('#selenium--miniCart-empty-cart-btn'));
    // await emptyButton.click();
    //await waitAWhile(true); 
  });
}



  //.ax-btn-primary     Töm