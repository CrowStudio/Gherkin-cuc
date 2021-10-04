module.exports = function() {
  this.Given(/^that I am on "([^"]*)"$/, async function(url){
    await helpers.loadPage(url);
  });

  this.When(/^I click the accept cookies button$/, async function(){
    // Saving this code for later.
    //await driver.wait(until.elementLocated(by.css('div.banner-actions-container')), 20000);
    driver.manage().timeouts().implicitlyWait(20000);
    let cookiesButtonSelect = await driver.findElement(By.css('#onetrust-accept-btn-handler'));
    await cookiesButtonSelect.click();
  });
}