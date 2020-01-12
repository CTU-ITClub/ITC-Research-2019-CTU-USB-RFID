import Student = require("../models/Student");
/** Student Access */
declare const StudentAccess: {
    /**
     * Select students
     * @param {string} id Student ID
     * @returns Students array
     */
    select: (id?: string | undefined) => Promise<Student[]>;
    /**
     * Insert one student
     * @param {StudentModel} student Inserted student
     * @returns ID of inserted student
     */
    insert: (student: Student) => Promise<string | undefined>;
    /**
     * Update one student
     * @param {StudentModel} student Updated student
     * @returns Number of updated students
     */
    update: (student: Student) => Promise<number | undefined>;
    /**
     * Update one student
     * @param {StudentModel} student Updated student
     * @returns Number of deleted students
     */
    delete: (student: Student) => Promise<number | undefined>;
};
export = StudentAccess;
