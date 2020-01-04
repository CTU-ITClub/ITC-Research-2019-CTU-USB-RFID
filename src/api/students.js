const express = require("express");
const provider = require("./provider");

const router = express.Router();

router.get("/", (req, res) => {
  provider.get("students", {}).then(students => res.status(200).send(students));
});

module.exports = { uri: "/api/students", router };
