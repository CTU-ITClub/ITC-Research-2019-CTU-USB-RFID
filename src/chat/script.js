const hello = require("./messages/hello");
const unknow = require("./messages/unknow");

module.exports = {
  unknow: unknow(),
  hello: hello(),
  hi: hello()
};
