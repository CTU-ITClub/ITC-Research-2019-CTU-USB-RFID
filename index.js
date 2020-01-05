const express = require("express");
const bodyParser = require("body-parser");
const api = require("./src/api");
const chatbot = require("./src/chatbot");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/chatbot", chatbot);
api.activate(app);
app.listen(port, () => console.log(`RFID Checkin Server is listening on port http://127.0.0.1:${port}/`));
