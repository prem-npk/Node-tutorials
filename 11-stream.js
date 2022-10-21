const { createReadStream } = require("fs");

//highWaterMark-control size
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 1,
  encoding: "utf8",
});
stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => {
  console.log(err);
});
