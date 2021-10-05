module.exports = function () {

  this.When(/^ I click on a product$/, async function () {
    let imageButton = await driver.findElement(By.css('.ax.product-puff-image'));
    await imageButton.click();
  });

  this.Then(/^I should get the clicked products information$/, async function () {
    let productInfo = await driver.findElement(By.css('.md-dialog-content'));
    await productInfo;

    //funkar ej

  });

}