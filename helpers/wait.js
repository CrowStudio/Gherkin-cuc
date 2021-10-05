async function waitAWhile(slowDown) {
  await driver.sleep(slowDown ? 5000 : 0);
}

module.exports = { waitAWhile }
