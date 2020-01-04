const express = require("express");
const bodyParser = require("body-parser");
const api = require("./src/api/api");
const bot = require("./src/chat/bot");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/chatbot", bot);
api.activate(app);
app.listen(port, () => console.log(`RFID Checkin Server is listening on port ${port}/`));
