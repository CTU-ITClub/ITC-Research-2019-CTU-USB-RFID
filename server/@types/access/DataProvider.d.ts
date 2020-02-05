import Document = require("sds-kit/dist/@types/Document");
import IQuery = require("sds-kit/dist/@types/interfaces/IQuery");
import IModel = require("../interfaces/IModel");
/** Data Provider */
declare const DataProvider: {
    /**
     * Select documents
     * @param {string} name Name collection
     * @param {IQuery} query Query for selector
     * @returns Documents array
     */
    select: (name: string, query: IQuery) => Promise<Document[]>;
    /**
     * Insert one document
     * @param {string} name Name collection
     * @param {IModel} model Inserted document
     * @returns ID inserted document
     */
    insert: (name: string, model: IModel) => Promise<string | undefined>;
    /**
     * Update one document
     * @param {string} name Name collection
     * @param {IQuery} query Selector query
     * @param {IModel} model Updated document
     * @returns Number of updated documents
     */
    update: (name: string, query: IQuery, model: IModel) => Promise<number | undefined>;
    /**
     * Delete one document
     * @param {string} name Name collection
     * @param {IQuery} query Selector query
     * @returns Number of deleted documents
     */
    delete: (name: string, query: IQuery) => Promise<number | undefined>;
};
export = DataProvider;
