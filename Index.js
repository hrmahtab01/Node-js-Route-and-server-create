const { log } = require("console");
const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    res.write("Hello World!");
    res.end();
  })
  .listen(8080);
  console.log(url);
  
