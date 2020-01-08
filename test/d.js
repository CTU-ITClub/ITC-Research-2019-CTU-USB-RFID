const GoogleSpreadsheet = require("google-spreadsheet");
const { promisify } = require("util");

const creds = require("./access.json");

async function accessSpreadsheet() {
  const doc = new GoogleSpreadsheet("1hhLn4B8Q9Tdsiq3U5PTzQyA9Z52CDsL8llrniz8Tr88");

  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];
  // console.log(sheet.title);
  // console.log(sheet.rowCount);

  const rows = await promisify(sheet.getRows)({
    offset: 1
  });

  rows.forEach(row => {
    console.log(row.id);
    console.log(row.name);
  });
}

accessSpreadsheet();
