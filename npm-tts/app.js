const names = require("./modules/2-names");
const sayHi = require("./3-utils");
const data = require("./4-alt_exp");

// require("./5-mindGrenade");
// console.log(names);

// sayHi(names.john);
// sayHi(names.eddie);

// console.log(data);

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url == "/about") {
    res.end("Here is our short history");
  }
  res.end(`
    <h1> Oops! </h1>
    <p> We can't seem to find the page you are looking for </p>
    <a href = "/"> Back Home </a>
    `);
});

server.listen(5000);
