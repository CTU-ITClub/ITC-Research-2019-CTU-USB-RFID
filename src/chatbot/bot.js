const request = require("request");
const message = require("./message");

/**
 * Send message to client
 * @param {string} id ID client
 * @param {string} text Content of message
 */
function send(id, text) {
  request({
    /** Api send message of Messenger */
    url: "https://graph.facebook.com/v2.6/me/messages",
    qs: {
      /** Access code token, get it at https://developers.facebook.com/apps/504492863527014/messenger/settings/*/
      access_token:
        "EAAHK1WXsGGYBAIHYrVz5aS1MyDI1oc2wijzxyFQr1piGHiyP15YZACYcBuyqpIddMVd8e6SKxLL245IF7cpqnu56rs10mzAho5b9eWIBUcYogSgoCBWEdkBfAWHT1RGepzFk5ZAaVNNpHBDTvQYvjTORoyY1ivom15T2nZAULGJxvZBsxzzcchNHYlMapx0ZD"
    },
    method: "POST",
    /** Message send in JSON type */
    json: {
      recipient: {
        id: id
      },
      message: {
        text: text
      }
    }
  });
}

/**
 * React
 * @param {string} id ID sender
 * @param {string} command Command name
 */
function talk(id, command) {
  switch (command.toLowerCase()) {
    case "hello":
    case "hi":
      send(id, message.hello);
      break;

    case "help":
      send(id, message.help);
      break;

    default:
      send(id, message.unknow);
      break;
  }
}

module.exports = { talk };
