import SDSKit = require("sds-kit");
const id = "14DpzOr9AFdYpZR1GVxyXoNA30qMjxZCY2V_7AUrwG9Y";
const creds = require("./creds.json");

/**
 * Access collection
 * @param {string} name Name collection
 */
async function access(name) {
  const cluster = new SDSKit();
  const database = await cluster.access(id, creds);
  return database.collection(name);
}

module.exports = {
  /**
   * Select documents
   * @param {string} name Name collection
   * @param {any} query Query for selector
   * @returns Documents array
   */
  select: async (name, query) => {
    const collection = await access(name);
    return await collection.select(query);
  },

  /**
   * Insert one document
   * @param {string} name Name collection
   * @param {any} document Inserted document
   * @returns ID inserted document
   */
  insert: async (name, document) => {
    const collection = await access(name);
    return await collection.insert(document);
  },

  /**
   * Update one document
   * @param {string} name Name collection
   * @param {any} query Selector query
   * @param {any} document Updated document
   * @returns Number of updated documents
   */
  update: async (name, query, document) => {
    const collection = await access(name);
    return await collection.update(query, document);
  },

  /**
   * Delete one document
   * @param {string} name Name collection
   * @param {any} query Selector query
   * @returns Number of deleted documents
   */
  delete: async (name, query) => {
    const collection = await access(name);
    return await collection.delete(query);
  }
};
