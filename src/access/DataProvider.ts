import Collection = require("sds-kit/dist/@types/Collection");
import Document = require("sds-kit/dist/@types/Document");
import IQuery = require("sds-kit/dist/@types/interfaces/IQuery");
import IModel = require("../interfaces/IModel");

import SDSKit = require("sds-kit");

import creds = require("./creds.json");
const id = "14DpzOr9AFdYpZR1GVxyXoNA30qMjxZCY2V_7AUrwG9Y";

/**
 * Access collection
 * @param {string} name Name collection
 */
async function access(name: string): Promise<Collection> {
  const cluster = new SDSKit();
  const database = await cluster.access(id, creds);
  return database.collection(name);
}

/** Data Provider */
const DataProvider = {
  /**
   * Select documents
   * @param {string} name Name collection
   * @param {IQuery} query Query for selector
   * @returns Documents array
   */
  select: async (name: string, query: IQuery): Promise<Document[]> => {
    const collection = await access(name);
    return await collection.select(query);
  },

  /**
   * Insert one document
   * @param {string} name Name collection
   * @param {IModel} model Inserted document
   * @returns ID inserted document
   */
  insert: async (name: string, model: IModel): Promise<string | undefined> => {
    const collection = await access(name);
    return await collection.insert(model);
  },

  /**
   * Update one document
   * @param {string} name Name collection
   * @param {IQuery} query Selector query
   * @param {IModel} model Updated document
   * @returns Number of updated documents
   */
  update: async (name: string, query: IQuery, model: IModel): Promise<number | undefined> => {
    const collection = await access(name);
    return await collection.update(query, model);
  },

  /**
   * Delete one document
   * @param {string} name Name collection
   * @param {IQuery} query Selector query
   * @returns Number of deleted documents
   */
  delete: async (name: string, query: IQuery): Promise<number | undefined> => {
    const collection = await access(name);
    return await collection.delete(query);
  }
};

export = DataProvider;
