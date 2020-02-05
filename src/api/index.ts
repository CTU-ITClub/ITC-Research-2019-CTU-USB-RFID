import StudentApi = require("./StudentApi");

const apis = [StudentApi];

/** Api */
const api = {
  /**
   * Activate api for app
   * @param {Express} app nodejs app
   */
  activate: (app: any): void => {
    apis.forEach(api => app.use(api.route, api.api));
  }
};

export = api;
