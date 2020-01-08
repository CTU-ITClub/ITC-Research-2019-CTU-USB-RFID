const GoogleSpreadsheet = require("google-spreadsheet");
const { promisify } = require("util");
const creds = require("./creds.json");

async function connect(id, creds) {
  const doc = new GoogleSpreadsheet(id);
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();

  return {
    _ref: info,
    info: {
      id,
      url: info.id,
      title: info.title,
      updated: info.updated,
      author: {
        name: info.author.name,
        email: info.author.email
      }
    },
    access: table => access(info, table)
  };
}

function access(info, title) {
  const worksheet = info.worksheets.filter(worksheet => worksheet.title == title)[0];
  return {
    _ref: worksheet,
    info: {
      id: worksheet.id,
      url: worksheet.url,
      title: worksheet.title
    },
    select: query => select(worksheet, query)
  };
}

async function select(worksheet, query) {
  return await promisify(worksheet.getRows)(query);
}

(async () => {
  const database = await connect("14DpzOr9AFdYpZR1GVxyXoNA30qMjxZCY2V_7AUrwG9Y", creds);
  const table = database.access("students");
  const rows = await table.select({ offset: 1 });
  rows.forEach(row => {
    console.log(row.id);
    console.log(row.name);
    console.log(row.email);
    console.log();
  });
})();
