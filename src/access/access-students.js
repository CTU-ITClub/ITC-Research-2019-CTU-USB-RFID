const provider = require("./provider");
const name = "students";

/**
 * Select students
 * @param {string} id Student ID
 * @returns Students array
 */
async function select(id = undefined) {
  if (id === undefined) {
    const students = await provider.select(name, {});
    return students;
  } else {
    const students = await provider.select(name, { id });
    return students;
  }
}

/**
 * Insert one student
 * @param {any} student Inserted student
 * @returns Id of document of inserted student or "undefined" if fail
 */
async function insert(student) {
  const students = await select(student.id);
  if (students.length == 0) {
    return await provider.insert(name, student);
  } else {
    return undefined;
  }
}

/**
 * Update one student
 * @param {any} student Updated student
 * @returns Id of document of updated student or "undefined" if fail
 */
async function update(student) {
  const students = await select(student.id);
  if (students.length == 0) {
    return undefined;
  } else {
    return await provider.update(name, { id: student.id }, student);
  }
}

/**
 * Update one student
 * @param {any} student Updated student
 * @returns "true" if success, otherwise "false"
 */
async function drop(student) {
  return await provider.drop(name, { id: student.id });
}

module.exports = { select, insert, update, drop };
