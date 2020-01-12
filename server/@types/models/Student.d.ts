import Document = require("sds-kit/dist/@types/Document");
import IModel = require("../interfaces/IModel");
/** Student class
 * @implements IModel
 */
declare class Student implements IModel {
    /** Student Key */
    key?: string;
    /** Student Name */
    name?: string;
    /** Student Class */
    class?: string;
    /** Student Major */
    major?: string;
    /** Student Course */
    course?: string;
    /** Student Email */
    email?: string;
    /**
     * Create Student object
     * @param {Document} document Document
     */
    constructor(document: Document);
}
export = Student;
