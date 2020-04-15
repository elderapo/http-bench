const http = require("http");

let i = 0;
http
  .createServer((_, res) => {
    res.write(`Hello world(http): ${i++}`);
    return res.end();
  })
  .listen(80);
