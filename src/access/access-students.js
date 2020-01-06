const provider = require("./provider");
const name = "students";

async function select(id = undefined) {
  if (id === undefined) {
    const students = await provider.select(name, {});
    return students;
  } else {
    const students = await provider.select(name, { id });
    return students;
  }
}

async function insert(student) {
  const students = await select(student.id);
  if (students.length == 0) {
    return await provider.insert(name, student);
  } else {
    return undefined;
  }
}

async function update(student) {
  const students = await select(student.id);
  if (students.length == 0) {
    return undefined;
  } else {
    return await provider.update(name, { id: student.id }, student);
  }
}

async function del(student) {
  return await provider.delete(name, { id: student.id });
}

module.exports = { select, insert, update, delete: del };
