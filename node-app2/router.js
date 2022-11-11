function route(handle, pathname, res, reviewData) {
  console.log(pathname);
  if (typeof handle[pathname] === "function") {
    handle[pathname](res, reviewData);
  } else {
    console.log("No handle");
    res.writeHead(400, { "content-type": "text/plain" });
    res.write("Error 404 page not found");
    res.end();
  }
}

exports.route = route;
