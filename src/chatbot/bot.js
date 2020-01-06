const text = require("./text");
const messenger = require("./messenger");

module.exports = {
  /**
   * Talk to client
   * @param {string} id ID client
   * @param {string} command Command name
   */
  talk: (id, command) => {
    switch (command.toLowerCase()) {
      case "hello":
      case "hi":
        messenger.sendText(id, text.hello);
        break;

      case "help":
        messenger.sendText(id, text.help);
        break;

      default:
        messenger.sendText(id, text.unknow);
        break;
    }
  }
};
