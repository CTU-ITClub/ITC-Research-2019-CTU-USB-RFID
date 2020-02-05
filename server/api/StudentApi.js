"use strict";
const express = require("express");
const StudentAccess = require("../access/StudentAccess");
const router = express.Router();
// Select: GET api/students
router.get("/", async (req, res) => {
    const students = await StudentAccess.select();
    res.status(200).send(students);
});
// Select: GET api/students/<studetn id>
router.get("/:id", async (req, res) => {
    const students = await StudentAccess.select(req.params.id);
    res.status(200).send(students);
});
// Insert: POST api/students
router.post("/", async (req, res) => {
    const id = await StudentAccess.insert(req.body);
    if (id) {
        res.status(200).send(id);
    }
    else {
        res.status(406).send("ID has been existed");
    }
});
// Update: PUT api/students
router.put("/", async (req, res) => {
    const count = await StudentAccess.update(req.body);
    if (count) {
        res.status(200).send("Updated");
    }
    else {
        res.status(406).send("ID does not exist");
    }
});
// Drop: DELETE api/students
router.delete("/", async (req, res) => {
    const count = await StudentAccess.delete(req.body);
    if (count) {
        res.status(200).send("Deleted");
    }
    else {
        res.status(406).send("ID does not exist");
    }
});
/** Student API */
const StudentApi = {
    /** Root route */
    route: "/api/students",
    /** Router restAPI */
    api: router
};
module.exports = StudentApi;
