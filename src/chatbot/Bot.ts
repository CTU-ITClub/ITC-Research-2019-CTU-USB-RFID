import text = require("./Message");
import Messenger = require("./messenger");

/** Chatbot */
const Bot = {
  /**
   * Talk to client
   * @param {string} id ID client
   * @param {string} command Command name
   */
  talk: (id: string, command: string) => {
    switch (command.toLowerCase()) {
      case "hello":
      case "hi":
        Messenger.sendText(id, text.hello);
        break;

      case "help":
        Messenger.sendText(id, text.help);
        break;

      default:
        Messenger.sendText(id, text.unknow);
        break;
    }
  }
};

export = Bot;
