const { waitAWhile } = require('../helpers/wait.js');

module.exports = function () {
  //let comfirm

  this.When(/^I click the white Töm-button in the shopping cart$/, async function () {
    let emptyButton = await driver.findElements(By.css('.ax-btn-secondary'));
    await emptyButton[1].click();
    await waitAWhile(true);

  });

  this.When(/^confirm by clicking the red Töm-button$/, async function () {
    let manyButtons = await driver.findElements(By.css('.md-ripple-container'));

/*     for (let button of manyButtons) {
      let content = (await button.getText()).includes('Töm');
      if (content === 'Töm') {
        comfirm = await button;
      };
    }
     

    await manyButtons.click(); */
    await waitAWhile(true);
  });

  this.Then(/^I should have an empty shopping cart$/, async function () {
    let shopCartInfo = await driver.findElements(By.css('#selenium--miniCart-empty-info'));
    expect(shopCartInfo).to.equal(0);
    await waitAWhile(true);
    console.log(shopCartInfo);

  });
  this.Then(/^the total price should be "([^"]*)" kr$/, async function () {
    let totalAmount = await driver.findElements(By.css('#selenium-miniCart-total-amount'));
    expect(totalAmount).to.equal(0, 00);

    await waitAWhile(true);
  })

}