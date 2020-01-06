const mongodb = require("mongodb");

/**
 * Open connection
 */
async function open() {
  const client = await mongodb.MongoClient.connect("mongodb+srv://daomtthuan:V7gPx8TOmdWt6T16@daomtthuan-83mbv.mongodb.net/rfid-checkin", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  if (client === undefined) {
    console.log("Error establishing a database connection");
    return undefined;
  } else {
    return client;
  }
}

module.exports = {
  /**
   * Select documents
   * @param {string} name Name collection
   * @param {any} query Query for selector
   * @returns Documents array
   */
  select: async (name, query) => {
    const client = await open();
    if (client !== undefined) {
      const collection = client.db().collection(name);
      const documents = await collection.find(query).toArray();
      client.close();
      return documents;
    } else {
      return undefined;
    }
  },

  /**
   * Insert one document
   * @param {string} name Name collection
   * @param {any} document Inserted document
   * @returns Inserted ID
   */
  insert: async (name, document) => {
    const client = await open();
    if (client !== undefined) {
      const collection = client.db().collection(name);
      const result = await collection.insertOne(document);
      client.close();
      return result.insertedId;
    } else {
      return undefined;
    }
  },

  /**
   * Update one document
   * @param {string} name Name collection
   * @param {any} query Selector query
   * @param {any} document Updated document
   * @returns Updated ID
   */
  update: async (name, query, document) => {
    const client = await open();
    if (client !== undefined) {
      const collection = client.db().collection(name);
      const result = await collection.updateOne(query, { $set: document });
      client.close();
      return result.upsertedId;
    } else {
      return undefined;
    }
  },

  /**
   * Delete one document
   * @param {string} name Name collection
   * @param {any} query Selector query
   * @returns "true" if success, otherwise "false"
   */
  delete: async (name, query) => {
    const client = await open();
    if (client !== undefined) {
      const collection = client.db().collection(name);
      const result = await collection.deleteOne(query);
      client.close();
      return result.deletedCount == 1;
    } else {
      return undefined;
    }
  }
};
