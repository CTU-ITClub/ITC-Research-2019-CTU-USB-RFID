const express = require("express");
const access = require("../access");

const router = express.Router();

// Select: GET api/students
router.get("/", async (req, res) => {
  const students = await access.student.select();
  res.status(200).send(students);
});

// Select: GET api/students/<studetn id>
router.get("/:id", async (req, res) => {
  const students = await access.student.select(req.param.id);
  res.status(200).send(students);
});

// Insert: POST api/students
router.post("/", async (req, res) => {
  const _id = await access.student.insert(req.body);
  if (_id === undefined) {
    res.status(406).send("ID has been existed");
  } else {
    res.status(200).send("Inserted");
  }
});

// Update: PUT api/students
router.put("/", async (req, res) => {
  const _id = await access.student.update(req.body);
  if (_id === undefined) {
    res.status(406).send("ID does not exist");
  } else {
    res.status(200).send("Updated");
  }
});

// Drop: DELETE api/students
router.delete("/", async (req, res) => {
  const success = await access.student.delete(req.body);
  if (success) {
    res.status(200).send("Deleted");
  } else {
    res.status(406).send("ID does not exist");
  }
});

module.exports = {
  /**
   * Root router
   */
  root: "/api/students",

  /**
   * Router restAPI
   */
  router
};
