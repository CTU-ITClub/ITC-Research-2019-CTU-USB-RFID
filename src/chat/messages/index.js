const hello = require("./hello");
const unknow = require("./unknow");

module.exports = {
  unknow: unknow(),
  hello: hello(),
  hi: hello()
};
