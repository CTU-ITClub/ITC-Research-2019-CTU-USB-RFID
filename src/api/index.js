/**
 * @author Daomtthuan
 * @email dao.mt.thuan@gmail.com
 * @create date 2020-01-03 17:34:51
 * @modify date 2020-01-03 17:34:51
 * @desc Api for app
 */

const webhook = require("./webhook");

/**
 * Activate api for app
 * @param {Express} app nodejs app
 */
function activate(app) {
  app.use("/webhook", webhook);
}

module.exports = { activate };
