const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // req 使用者 request
  // res response
  //   console.log(req); 會出現超多東東
  // console.log(req.url); // Server is running on port 3501.
  if (req.url == "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      res.writeHead(200, { "Content-Type": "text / html" });
      res.write(data);
      res.end();
    });
    // res.writeHead(200, { "Content-Type": "text / html" });
    // res.write("<h1>You are on the homepage.</h1>");
    // res.write("<p>Hello</p>");
    // res.end();
  } else {
    let parseURL = url.parse(req.url); // 出現網頁就可以在網址後面亂打
    res.write("Hello user" + parseURL.pathname);
    res.end();
  }
});

server.listen(3501, () => {
  console.log("Server is running on port 3501.");
});
