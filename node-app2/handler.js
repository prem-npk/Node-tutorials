var querystring = require("querystring");

function home(res) {
  console.log("Executing 'home' handler");
  var htmlFile =
    "<html>" +
    "<body>" +
    '<form action="/review" method="post">' +
    '<textarea name="text"></textarea>' +
    '<input type="submit">' +
    "</form>";
  "</body>" + "</html>";

  res.writeHead(200, { "content-type": "text/html" });
  res.write(htmlFile);
  res.end();
}
function review(res, reviewData) {
  console.log("Executing 'review' handler");
  res.writeHead(200, { "content-type": "text/html" });
  res.write("Your review is " + querystring.parse(reviewData).text);
  res.end();
}
exports.home = home;
exports.review = review;
