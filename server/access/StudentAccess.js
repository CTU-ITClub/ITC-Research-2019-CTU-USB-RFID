"use strict";
const DataProvider = require("./DataProvider");
const Student = require("../models/Student");
const name = "students";
/** Student Access */
const StudentAccess = {
    /**
     * Select students
     * @param {string} id Student ID
     * @returns Students array
     */
    select: async (id) => {
        const students = new Array();
        const documents = await DataProvider.select(name, id ? { query: `key = ${id}` } : {});
        documents.forEach(document => students.push(new Student(document)));
        return students;
    },
    /**
     * Insert one student
     * @param {StudentModel} student Inserted student
     * @returns ID of inserted student
     */
    insert: async (student) => {
        if (student.key) {
            const students = await StudentAccess.select(student.key);
            if (students.length == 0) {
                return await DataProvider.insert(name, student);
            }
        }
    },
    /**
     * Update one student
     * @param {StudentModel} student Updated student
     * @returns Number of updated students
     */
    update: async (student) => {
        if (student.key) {
            return await DataProvider.update(name, { query: `key = ${student.key}` }, student);
        }
    },
    /**
     * Update one student
     * @param {StudentModel} student Updated student
     * @returns Number of deleted students
     */
    delete: async (student) => {
        if (student.key) {
            return await DataProvider.delete(name, { query: `key = ${student.key}` });
        }
    }
};
module.exports = StudentAccess;
