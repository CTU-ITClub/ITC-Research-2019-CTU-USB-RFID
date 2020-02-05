"use strict";
/** Student class
 * @implements IModel
 */
class Student {
    /**
     * Create Student object
     * @param {Document} document Document
     */
    constructor(document) {
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
module.exports = Student;
