const provider = require("./provider");

async function get(id = undefined) {
  if (id === undefined) {
    const students = await provider.select("students", {});
    return students;
  } else {
    const students = await provider.select("students", { id });
    return students;
  }
}

async function post(student) {
  return await provider.insert("students", student);
}

module.exports = { get, post };
