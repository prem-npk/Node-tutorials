const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`Data recieved Name:${name} age:${age}`);
});
customEmitter.emit("response", "Pk", 25);
