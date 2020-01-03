/**
 * @author Daomtthuan
 * @email dao.mt.thuan@gmail.com
 * @create date 2020-01-03 14:19:24
 * @modify date 2020-01-03 14:20:27
 * @desc Webhook api chatbot
 */

const express = require("express");
const request = require("request");
const router = express.Router();

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
        "EAAHK1WXsGGYBAJaJbsuDeh9ze7bqKIhajrGRB3hIVYrKgyBtmZCdYZCiFVaShMdpXdCZA1GIjcMnK2RrK4Qxmuddz5uaUF9iBHf9TFMUigKV1jXLxoZAWZAJDfiZAiZAeC8fHbGJfz0q37twVGyTAxO2ZAsTANoWS43o9Sj9wOa2t3KiiZCr7r6ZC7pZCx2OovYo3kZD"
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

// Authenticate
router.get("/", (req, res) => {
  if (req.query["hub.verify_token"] === "daomtthuan" /*authentication code is "daomtthuan"*/) {
    res.send(req.query["hub.challenge"]);
  } else {
    res.send("Error, wrong validation token");
  }
});

// Receive and analyze
router.post("/", function(req, res) {
  console.log(req.body.entry);
  req.body.entry.forEach(entry => {
    entry.messaging.forEach(message => {
      const id = message.sender.id;
      const text = message.message.text;
      if (text !== undefined) {
        switch (text.toLowerCase()) {
          case "hello":
          case "hi":
            send(id, "Hello, I'm RFID Checkin chatbox. I'm from IT Club Can Tho University. Do you need any help?");
            break;

          default:
            send(id, "Sorry, I can't understand.");
            break;
        }
      }
    });
  });
  res.status(200).send("OK");
});

module.exports = router;
