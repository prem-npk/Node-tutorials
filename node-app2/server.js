var http = require("http");
var url = require("url");

function startServer(route, handle) {
  function onRequest(req, res) {
    var reviewData = "";
    var pathname = url.parse(req.url).pathname;
    req.addListener("data", function (chunk) {
      reviewData += chunk;
    });
    req.addListener("end", function () {
      route(handle, pathname, res, reviewData);
    });
  }
  http.createServer(onRequest).listen(5000);
}

exports.startServer = startServer;
