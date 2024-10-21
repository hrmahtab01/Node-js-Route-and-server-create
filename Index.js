const http = require("http");
const url = require("url");
const fs = require("fs");
const port = 8080;

const myserver = http.createServer((req, res) => {
  let pathaddr = url.parse(req.url, true);
  let filename = "." + pathaddr.pathname;
  fs.readFile(`${filename}.html`, (errr, result) => {
   if (errr) {
    res.end("404 not found")
   }else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(result);
    return res.end();
   }
  });
});

myserver.listen(port);
