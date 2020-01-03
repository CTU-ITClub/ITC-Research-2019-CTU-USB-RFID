/**
 * @author Daomtthuan
 * @email dao.mt.thuan@gmail.com
 * @create date 2020-01-03 17:34:51
 * @modify date 2020-01-03 18:20:11
 * @desc Api for app
 */

const webhook = require("./webhook");
const student = require("./student");

/**
 * Activate api for app
 * @param {Express} app nodejs app
 */
function activate(app) {
  app.use("/api/webhook", webhook);
  app.use("/api/student", student);
}

module.exports = { activate };
