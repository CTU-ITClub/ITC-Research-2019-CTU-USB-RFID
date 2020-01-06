const provider = require("./provider");
const name = "students";

module.exports = {
  /**
   * Select students
   * @param {string} id Student ID
   * @returns Students array
   */
  select: async (id = undefined) => {
    if (id === undefined) {
      const students = await provider.select(name, {});
      return students;
    } else {
      const students = await provider.select(name, { id });
      return students;
    }
  },

  /**
   * Insert one student
   * @param {any} student Inserted student
   * @returns Id of document of inserted student or "undefined" if fail
   */
  insert: async student => {
    const students = await select(student.id);
    if (students.length == 0) {
      return await provider.insert(name, student);
    } else {
      return undefined;
    }
  },

  /**
   * Update one student
   * @param {any} student Updated student
   * @returns Id of document of updated student or "undefined" if fail
   */
  update: async student => {
    const students = await select(student.id);
    if (students.length == 0) {
      return undefined;
    } else {
      return await provider.update(name, { id: student.id }, student);
    }
  },

  /**
   * Update one student
   * @param {any} student Updated student
   * @returns "true" if success, otherwise "false"
   */
  delete: async student => {
    return await provider.drop(name, { id: student.id });
  }
};
