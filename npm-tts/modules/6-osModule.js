const os = require("os");

// info about current os.userInfo
console.log(os.userInfo());

//uptime method in seconds
console.log(`The system uptime is  ${os.uptime()} seconds`);

//getting os deails
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOs);
