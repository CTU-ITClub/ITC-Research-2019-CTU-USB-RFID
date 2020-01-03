const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const api = require("./src/api");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

api.activate(app);

app.listen(port, () => console.log(`RFID Checkin Server is listening on http://127.0.0.1:${port}/`));
