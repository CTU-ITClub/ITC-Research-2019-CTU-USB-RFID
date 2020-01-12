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
      const students = await provider.select(name, { key: id });
      return students;
    }
  },

  /**
   * Insert one student
   * @param {any} student Inserted student
   * @returns ID of inserted student
   */
  insert: async student => {
    const students = await this.select(student.id);
    if (students.length == 0) {
      return await provider.insert(name, student);
    }
  },

  /**
   * Update one student
   * @param {any} student Updated student
   * @returns Number of updated students
   */
  update: async student => {
    const students = await this.select(student.id);
    if (students.length == 0) {
      return undefined;
    }
  },

  /**
   * Update one student
   * @param {any} student Updated student
   * @returns Number of deleted students
   */
  delete: async student => {
    await provider.delete(name, { key: student.id });
  }
};
