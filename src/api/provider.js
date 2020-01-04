"use strict";

const mongodb = require("mongodb");

const uri = "mongodb+srv://daomtthuan:V7gPx8TOmdWt6T16@daomtthuan-83mbv.mongodb.net/test?retryWrites=true&w=majority";
const database = "rfid-checkin";

/**
 * Open connection
 */
async function openConnection() {
  const client = await mongodb.MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  if (client === undefined) {
    console.log("Error establishing a database connection");
    return undefined;
  } else {
    return client;
  }
}

/**
 * Get documents array
 * @param {string} name Name collection
 * @param {any} query Query for findding
 */
async function get(name, query) {
  const client = await openConnection();
  const collection = client.db(database).collection(name);
  const documents = await collection.find(query).toArray();
  client.close();
  return documents;
}

/**
 * Provider api
 */
module.exports = { get };
