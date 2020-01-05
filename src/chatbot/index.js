const express = require("express");
const bot = require("./bot");

const router = express.Router();

// Authenticate
router.get("/", (req, res) => {
  if (req.query["hub.verify_token"] == "daomtthuan") {
    res.status(200).send(req.query["hub.challenge"]);
  } else {
    res.status(401).send("Error, wrong validation token");
  }
});

// Receive and analyze
router.post("/", (req, res) => {
  req.body.entry.forEach(entry => {
    entry.messaging.forEach(messaging => {
      if (messaging.message !== undefined) {
        if (messaging.message.text !== undefined) {
          bot.talk(messaging.sender.id, messaging.message.text);
        }
      }
    });
  });
  res.status(200).send("OK");
});

module.exports = router;
