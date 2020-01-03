/**
 * @author Daomtthuan
 * @email dao.mt.thuan@gmail.com
 * @create date 2020-01-03 18:16:00
 * @modify date 2020-01-03 18:16:00
 * @desc Student api
 */

const express = require("express");
const mongodb = require("mongodb");

/**
 * Student route api
 */
const router = express.Router();

const client = new mongodb.MongoClient("mongodb://127.0.0.1:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const send = (response, status, json, client = null) => {
  response.status(status).json(json);
  if (client) client.close();
};

router.post("/insert", (request, response) => {
  let account = request.body;
  if (
    /^\w{6,}$/.test(account.username) &&
    /^.{6,}$/.test(account.password) &&
    /[^0-9\\\~\!\@\#\$\%\^\&\*\(\)\_\+\`\-\'\;\:\|\"\=\.\,\/\?\><]+/.test(account.name) &&
    /zz/.test(account.email) &&
    /^(([+]{1}[0-9]{2}|0)[0-9]{9,11})$/.test(account.phone)
  )
    client.connect(error => {
      if (error) send(response, 501, "error");
      else {
        client
          .db("cloud-school")
          .collection("account")
          .findOne({ username: account.username }, (error, result) => {
            if (error) send(response, 501, "error", client);
            else if (result) send(response, 200, "existed", client);
            else
              bcrypt.hash(account.password, 10, (error, hash) => {
                if (error) send(response, 501, "error", client);
                else {
                  account.password = hash;
                  client
                    .db("cloud-school")
                    .collection("account")
                    .insertOne(account, error => {
                      if (error) send(response, 501, "error", client);
                      else send(response, 200, "success", client);
                    });
                }
              });
          });
      }
    });
  else send(response, 501, "error");
});

module.exports = router;
