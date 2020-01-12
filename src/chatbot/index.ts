import express = require("express");
import Bot = require("./Bot");

const router = express.Router();

// Authenticate: GET /chatbot?hub.verify_token=<verify_token>&hub.challenge=<challenge>&hub.mode=<mode>"
router.get("/", (req, res) => {
  if (req.query["hub.verify_token"] == "daomtthuan") {
    res.status(200).send(req.query["hub.challenge"]);
  } else {
    res.status(401).send("Error, wrong validation token");
  }
});

// Receive and analyze: POST /chatbot
router.post("/", (req, res) => {
  req.body.entry.forEach(entry => {
    entry.messaging.forEach(messaging => {
      if (messaging.message !== undefined) {
        if (messaging.message.text !== undefined) {
          Bot.talk(messaging.sender.id, messaging.message.text);
        }
      }
    });
  });
  res.status(200).send("OK");
});

module.exports = router;
