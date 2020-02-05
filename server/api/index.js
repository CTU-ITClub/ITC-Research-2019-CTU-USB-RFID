"use strict";
const StudentApi = require("./StudentApi");
const apis = [StudentApi];
/** Api */
const api = {
    /**
     * Activate api for app
     * @param {Express} app nodejs app
     */
    activate: (app) => {
        apis.forEach(api => app.use(api.route, api.api));
    }
};
module.exports = api;
