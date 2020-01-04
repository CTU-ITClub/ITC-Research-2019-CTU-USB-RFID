const router = require("express").Router();
const request = require("request");
const messages = require("./messages");

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
        "EAAHK1WXsGGYBABNiNDDcqMFV1JCRcRtufnoRHw5XRaQG1lMJDcTLoNGbkMZAxVc3V54cT9QKX205E3nRGtDjcjdIvkddLnpv5swRDU4XZAg4u4hFvpjmSauZAvWWa4wC2FAXvrBQZCav1T0rtUH2eaZBpLCnSCI0uwZCYzZApmXQV421xntHdljT0HvdET5iqEZD"
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

/**
 * Webhook route api
 */
module.exports = router;
