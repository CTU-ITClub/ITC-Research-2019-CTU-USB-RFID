const apis = [require("./students")];

module.exports = {
  /**
   * Activate api for app
   * @param {any} app nodejs app
   */
  activate: app => {
    apis.forEach(api => app.use(api.root, api.router));
  }
};
