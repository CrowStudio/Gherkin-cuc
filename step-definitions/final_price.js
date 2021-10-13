const { waitAWhile } = require('../helpers/wait.js');

let productsToBuy;

module.exports = function() {
  this.Given(/^that I am on the Ice Cream category page$/, async function(){
    
    // We need to scroll into view for all menu items because of different screen sizes.
    await driver.wait(until.elementsLocated(By.css('a[href="/sortiment/fryst"]')), 10000);
    let frystLink = await driver.findElement(By.css('a[href="/sortiment/fryst"]'));
    await driver.executeScript('document.querySelector(\'a[href="/sortiment/fryst"]\').scrollIntoView()');
    await frystLink.click();

    await driver.wait(until.elementsLocated(By.css('a[href="/sortiment/fryst/glass"]')), 10000);
    let glassLink = await driver.findElement(By.css('a[href="/sortiment/fryst/glass"]'));
    await driver.executeScript('document.querySelector(\'a[href="/sortiment/fryst/glass"]\').scrollIntoView()');
    await glassLink.click();

    await driver.wait(until.elementsLocated(By.css('a[href="/sortiment/fryst/glass/flerpack-och-styckglass"]')), 10000);
    let flerLink = await driver.findElement(By.css('a[href="/sortiment/fryst/glass/flerpack-och-styckglass"]'));
    await driver.executeScript('document.querySelector(\'a[href="/sortiment/fryst/glass/flerpack-och-styckglass"]\').scrollIntoView()');
    await flerLink.click();

    // Wait for header to be visible.
    let headerText;
    while (headerText !== 'Flerpack- & styckglass') {
      headerText = await (await driver.findElement(By.css('h2'))).getText();
      await driver.sleep(100);
    }

    expect(headerText).to.equal('Flerpack- & styckglass');
  });

  this.When(/^I put one of each that has a set price in the shopping cart$/, async function(){

    // Click on "visa fler" until all products are visible.
    let loadMore = [];
    while(true) {
      loadMore = await driver.findElements(By.css('button[class*="LoadMore"]'));
      if(loadMore.length > 0){
        await loadMore[0].click();
      } else {
        break;
      }
      await waitAWhile(true);
    }

    await driver.executeScript('window.scrollTo(0,0)');

    let products = await driver.findElements(By.css('[itemtype="https://schema.org/Product"]'));
    productsToBuy = [];
    for(product of products){
      let hasPricePerPiece = (await product.getText()).includes('kr/st');

      // If not kr/st, do nothing
      if (!hasPricePerPiece) { continue; }

      // Set up variables
      let name = await (await product.findElement(By.css('[itemprop="name"]'))).getText();
      let quantity = '1';
      let priceOfOne = +((await (await product.findElement(By.css('[class^="PriceLabel_product-price-text"]'))).getText()).split('\n').join('.').split('./st').join(''));
      
      // Push to array
      productsToBuy.push({ name, quantity, priceOfOne });
      
      // Send quantity with webdriver
      let quantityField = await product.findElement(By.css('[aria-label="Ändra produktantal"]'));
      await quantityField.sendKeys(quantity, selenium.Key.ENTER);
    }
  });

  this.Then(/^I should be able to show the correct amount of products bought$/, async function(){
    let totalQuantity = 0;
    for (let { quantity } of productsToBuy) {
      totalQuantity += +quantity;
    }
    waitAWhile(true);
    let miniCartTotalQuantity = +(await (await driver.findElement(By.css('[class^="MiniCartstyles__StyledCounter"]'))).getText());

    console.log("Antal i korgen: ", miniCartTotalQuantity);
    console.log("Antal i arrayen: ", totalQuantity);
    
    expect(miniCartTotalQuantity).to.equal(totalQuantity);
  });

  this.Then(/^I should be able to calculate a final price$/, async function(){
    let totalPrice = 0;
    for (let { priceOfOne } of productsToBuy) {
      totalPrice += priceOfOne;
    }
    waitAWhile(true);
    let miniCartTotalPrice = +(await (await driver.findElement(By.css('[class^="MiniCartstyles__StyledPrice"]'))).getText()).replace('kr','').replace(/\s/g, '').replace(',','.');
    totalPrice = +totalPrice.toFixed(2);
    
    console.log('Pris i korgen: ', miniCartTotalPrice);
    console.log('Pris is arrayen: ', totalPrice);
    
    expect(miniCartTotalPrice).to.equal(totalPrice);
  });
}