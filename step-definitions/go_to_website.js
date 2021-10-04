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
  });

  this.Then(/^I should be able to see some products$/, async function(){
    let productArray = await driver.findElements(By.css(".ax-product-puff-head"));
    expect(productArray.length).to.not.equal(0);
  });
}