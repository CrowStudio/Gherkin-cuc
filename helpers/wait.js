async function waitAWhile(slowDown) {
  await driver.sleep(slowDown ? 3000 : 0);
}

module.exports = { waitAWhile }
