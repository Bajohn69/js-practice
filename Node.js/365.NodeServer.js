const http = require("http");

const server = http.createServer((req, res) => {
  // req 使用者 request
  // res response
  //   console.log(req); 會出現超多東東
  console.log(req.url);

  res.write("Hello user.");
  res.end();
});

server.listen(3501, () => {
  console.log("Server is running on port 3501.");
});
