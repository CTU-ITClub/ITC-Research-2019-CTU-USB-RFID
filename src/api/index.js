"use strict";

const apis = [];

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
