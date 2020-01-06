const express = require("express");
const access = require("../access/access-students");

const router = express.Router();

router.get("/", (req, res) => {
  access.get().then(students => res.status(200).send(students));
});

router.get("/:id", (req, res) => {
  access.get(req.param.id).then(students => res.status(200).send(students));
});

router.post("/", (req, res) => {
  access.post(req.body).then(id => {
    res.status(200).send(id);
  });
});

module.exports = { uri: "/api/students", router };
