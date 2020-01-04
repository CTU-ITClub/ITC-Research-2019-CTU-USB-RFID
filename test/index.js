const provider = require("../src/api/provider");
provider.get("student", {}).then(students => console.log(students));
