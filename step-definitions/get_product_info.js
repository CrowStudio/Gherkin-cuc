const { waitAWhile } = require('../helpers/wait.js');
module.exports = function () {

  this.When(/^I click on a product$/, async function () {
    let imageButton = await driver.findElement(By.css('.resized-image'));
    await imageButton.click();
  });

  this.Then(/^I should get the clicked products information$/, async function () {
    await waitAWhile(true);
    let productInfo = await driver.findElement(By.css('.info-block.description'));
    await productInfo;
    expect(productInfo).to.not.equal(null);


  });

}