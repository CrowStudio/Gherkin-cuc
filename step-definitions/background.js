const { waitAWhile } = require('../helpers/wait.js');

module.exports = function () {
  this.Given(/^that I am on "([^"]*)"$/, async function (url) {
    await helpers.loadPage(url);
  });

  this.Given(/^I click the accept cookies button$/, async function () {
    await driver.wait(until.elementLocated(By.css('div.banner-actions-container')), 10000);
    let cookiesButtonSelect = await driver.findElement(By.css('#onetrust-accept-btn-handler'));

    while (!(await cookiesButtonSelect.isDisplayed())) {
      await driver.sleep(100);
    }

    await cookiesButtonSelect.click();

    await waitAWhile(true);
  });

  this.Given(/^we have been through the initial select delivery popup$/, async function () {
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-plus'));
    await plusButton.click();

    await waitAWhile(true);

    await driver.wait(until.elementsLocated(By.css('.ax-delivery-widget-overlay')), 10000);
    let deliveryOverlay = await driver.findElement(By.css('.ax-delivery-widget-overlay'));
    await deliveryOverlay.click();

    let minusButton = await driver.findElement(By.css('.ax-product-quantity-minus'));
    await minusButton.click();

    await waitAWhile(true);
  });

  // This function is unnecessary for final product, but should be included somewhere to have a verification method.
  this.Then(/^I should be able to see some products$/, async function () {
    let productArray = await driver.findElements(By.css(".ax-product-puff-head"));
    expect(productArray.length).to.not.equal(0);
  });
}