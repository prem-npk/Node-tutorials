const url = require("url");
const fs = require("fs");

function renderHtml(path, res) {
  fs.readFile(path, function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("File not found");
    } else {
      res.write(data);
      res.end();
    }
  });
}

module.exports = {
  handleRequest: function (req, res) {
    res.writeHead(200, { "content-Type": "text/html" });

    var path = url.parse(req.url).pathname;
    switch (path) {
      case "/":
        renderHtml("./index.html", res);
        break;
      case "/login":
        renderHtml("./login.html", res);
        break;
      default:
        res.writeHead(404);
        res.write("Your requested page is not presented");
        res.end();
    }
  },
};
