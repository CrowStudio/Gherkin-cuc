let slowDown = true;

async function waitAWhile() {
  await driver.sleep(slowDown ? 5000 : 0);
}

module.exports = function() {
  this.Given(/^that I am on "([^"]*)"$/, async function(url){
    await helpers.loadPage(url);
  });

  this.Given(/^I click the accept cookies button$/, async function(){
    await driver.wait(until.elementLocated(by.css('div.banner-actions-container')), 20000);
    let cookiesButtonSelect = await driver.findElement(By.css('#onetrust-accept-btn-handler'));
   
    while(!(await cookiesButtonSelect.isDisplayed())) {
      await driver.sleep(100);
    }
    
    await cookiesButtonSelect.click();

    waitAWhile();
  });

  this.Given(/^we have been through the initial select delivery popup$/, async function () {
    let plusButton = await driver.findElement(By.css('.ax-product-quantity-plus'));
    let body = await driver.findElement(By.css('body'));

    await plusButton.click();

    await waitAWhile();

    await driver.wait(until.elementsLocated(by.css('.ax-delivery-widget-overlay')), 10000);

    let deliveryOverlay = await driver.findElement(By.css('.ax-delivery-widget-overlay'));
    await deliveryOverlay.click();

    let minusButton = await driver.findElement(By.css('.ax-product-quantity-minus'));
    await minusButton.click();

    await waitAWhile();
  });

  this.Then(/^I should be able to see some products$/, async function(){
    let productArray = await driver.findElements(By.css(".ax-product-puff-head"));
    expect(productArray.length).to.not.equal(0);
  });
}