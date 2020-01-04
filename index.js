/**
 * @author Daomtthuan
 * @email dao.mt.thuan@gmail.com
 * @create date 2020-01-03 17:29:58
 * @modify date 2020-01-04 09:41:02
 * @desc Nodejs server
 */

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const api = require("./src/api");
const webhook = require("./src/chat/webhook");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/public")));
app.use("/api/webhook", webhook);
api.activate(app);
app.listen(port, () => console.log(`RFID Checkin Server is listening on http://127.0.0.1:${port}/`));
