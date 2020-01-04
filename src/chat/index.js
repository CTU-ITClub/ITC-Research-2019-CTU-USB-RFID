const express = require("express");
const request = require("request");
const messages = require("./messages");

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
        "EAAHK1WXsGGYBAKt6is6T0sw1RBxytc5pRqZBDVMHHQQc8PiS1Yu95l64Be6BX8JQOdh1ZBMgMaUSGEyKERWYkutZAh8cda87zFgw4baAgVSJE0WtDB6kaGkCcxvEF5v0WhcMSpjozZAZAvOZBfRYLZCX32F5HWtGimULhGKBHCrFL5nL4ig0KRtMr8MXt4A6ZBIZD"
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
      const text = message.message.text.toLowerCase();
      send(id, messages[text] === undefined ? messages.unknow : messages[text]);
    });
  });
  res.status(200).send("OK");
});

module.exports = router;
