const webhook = require("./webhook");

function activate(app) {
  app.use("/webhook", webhook);
}

module.exports = { activate };
