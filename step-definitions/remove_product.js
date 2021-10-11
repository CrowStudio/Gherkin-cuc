const { waitAWhile } = require('../helpers/wait.js');

module.exports = function () {

  this.When(/^I click the minus button for a product in the shopping cart$/, async function () {
    let minusButton = await driver.findElement(By.css(''));
    await minusButton.click();

  });

}