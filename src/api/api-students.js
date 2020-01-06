const express = require("express");
const access = require("../access/access-students");

const router = express.Router();

// Select: GET api/students
router.get("/", async (req, res) => {
  const students = await access.select();
  res.status(200).send(students);
});

// Select: GET api/students/<studetn id>
router.get("/:id", async (req, res) => {
  const students = await access.select(req.param.id);
  res.status(200).send(students);
});

// Insert: POST api/students
router.post("/", async (req, res) => {
  const _id = await access.insert(req.body);
  if (_id === undefined) {
    res.status(406).send("ID has been existed");
  } else {
    res.status(200).send(_id);
  }
});

// Update: PUT api/students
router.put("/", async (req, res) => {
  const _id = await access.update(req.body);
  if (_id === undefined) {
    res.status(406).send("ID does not exist");
  } else {
    res.status(200).send(_id);
  }
});

// Drop: DELETE api/students
router.delete("/", async (req, res) => {
  const success = await access.drop(req.body);
  if (success) {
    res.status(200).send("Deleted");
  } else {
    res.status(406).send("ID does not exist");
  }
});

module.exports = { uri: "/api/students", router };
