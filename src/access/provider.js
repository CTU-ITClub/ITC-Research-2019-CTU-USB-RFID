const mongodb = require("mongodb");

const uri = "mongodb+srv://daomtthuan:V7gPx8TOmdWt6T16@daomtthuan-83mbv.mongodb.net/rfid-checkin";

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
 * Select documents
 * @param {string} name Name collection
 * @param {any} query Query for selector
 * @returns Documents array
 */
async function select(name, query) {
  const client = await openConnection();
  const collection = client.db().collection(name);
  const documents = await collection.find(query).toArray();
  client.close();
  return documents;
}

/**
 * Insert one document
 * @param {string} name Name collection
 * @param {any} document Inserted document
 * @returns Inserted ID
 */
async function insert(name, document) {
  const client = await openConnection();
  const collection = client.db().collection(name);
  const result = await collection.insertOne(document);
  client.close();
  return result.insertedId;
}

/**
 * Update one document
 * @param {string} name Name collection
 * @param {any} query Selector query
 * @param {any} document Updated document
 * @returns Updated ID
 */
async function update(name, query, document) {
  const client = await openConnection();
  const collection = client.db().collection(name);
  const result = await collection.updateOne(query, { $set: document });
  client.close();
  return result.upsertedId;
}

/**
 * Delete one document
 * @param {string} name Name collection
 * @param {any} query Selector query
 * @returns "true" if success, otherwise "false"
 */
async function drop(name, query) {
  const client = await openConnection();
  const collection = client.db().collection(name);
  const result = await collection.deleteOne(query);
  client.close();
  return result.deletedCount == 1;
}

module.exports = { select, insert, update, drop };
