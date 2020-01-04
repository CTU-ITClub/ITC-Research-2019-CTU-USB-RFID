/**
 * @author Daomtthuan
 * @email dao.mt.thuan@gmail.com
 * @create date 2020-01-03 17:34:51
 * @modify date 2020-01-04 09:42:29
 * @desc Api for app
 */

const apis = [require("./students")];

/**
 * Activate api for app
 * @param {any} app nodejs app
 */
function activate(app) {
  apis.forEach(api => app.use(api.uri, api.router));
}

/**
 * Api for app
 */
module.exports = { activate: activate };
