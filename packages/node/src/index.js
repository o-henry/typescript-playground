const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");

    if (req.url === "/test") {
      res.write("Hello Test!");
    }

    res.end();
  })
  .listen(3000, () => {
    console.log("server start at port 3000");
  });
