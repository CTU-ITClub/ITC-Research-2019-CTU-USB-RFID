import express = require("express");
import bodyParser = require("body-parser");
import path = require("path");
import api = require("./api");
import chatbot = require("./chatbot");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client")));
app.use("/chatbot", chatbot);
app.get("/", (req, res) => res.render("index.html"));
api.activate(app);
app.listen(port);
