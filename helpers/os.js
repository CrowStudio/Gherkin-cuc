// Returns the correct key depending on what OS is running the driver. In this case we are only worried about Mac. 

async function getOs(os) {
  return os.toLowerCase().includes("mac") ? selenium.Key.COMMAND : selenium.Key.CONTROL; 
}

module.exports = { getOs }