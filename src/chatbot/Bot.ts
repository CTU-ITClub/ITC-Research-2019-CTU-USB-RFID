import Message = require("./Message");
import Messenger = require("./messenger");

/** Chatbot */
const Bot = {
  /**
   * Talk to client
   * @param {string} id ID client
   * @param {string} command Command name
   */
  talk: (id: string, command: string): void => {
    switch (command.toLowerCase()) {
      case "hello":
      case "hi":
        Messenger.sendText(id, Message.hello);
        break;

      case "help":
        Messenger.sendText(id, Message.help);
        break;

      default:
        Messenger.sendText(id, Message.unknow);
        break;
    }
  }
};

export = Bot;
