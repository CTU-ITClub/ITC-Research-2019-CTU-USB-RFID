const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./src/api");
const chatbot = require("./src/chatbot");

const app = express();
const port = process.env.PORT || 3000;

//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/chatbot", chatbot);
app.get("/", (req, res) => res.render());
api.activate(app);
app.listen(port);
