import Document = require("sds-kit/dist/@types/Document");
import IModel = require("../interfaces/IModel");

/** Student class
 * @implements IModel
 */
class Student implements IModel {
  /** Student Key */
  public key?: string;

  /** Student Name */
  public name?: string;

  /** Student Class */
  public class?: string;

  /** Student Major */
  public major?: string;

  /** Student Course */
  public course?: string;

  /** Student Email */
  public email?: string;

  /**
   * Create Student object
   * @param {Document} document Document
   */
  constructor(document: Document) {
    /** Student Key */
    this.key = document.get("key");

    /** Student Name */
    this.name = document.get("name");

    /** Student Class */
    this.class = document.get("class");

    /** Student Major */
    this.major = document.get("major");

    /** Student Course */
    this.course = document.get("course");

    /** Student Email */
    this.email = document.get("email");
  }
}

export = Student;
