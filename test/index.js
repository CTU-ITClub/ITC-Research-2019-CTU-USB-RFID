const SDSKit = require("sds-kit");

(async () => {
  const id = "14DpzOr9AFdYpZR1GVxyXoNA30qMjxZCY2V_7AUrwG9Y";
  const creds = require("../server/access/creds.json");

  const cluster = new SDSKit.Cluster();
  const database = await cluster.access(id, creds);
  const collection = database.collection("students");
  const documents = await collection.select({});
  documents.forEach(document => console.log(document));
})();
