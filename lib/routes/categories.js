'use strict';

const Axios = require('axios');
const Config = require('../config');
const RouteBase = require('./base');

/**
 * Handle all category calls.
 * @class Categories
 */
class Categories extends RouteBase {

  /**
   * Get a Category by ID.
   * @param {String} categoryID Category UUID.
   * @returns {Object} Promise.
   */
  get(categoryID) {
    const url = Config.endpoint + `/api/categories/get?id=${categoryID}`;
    return this.filterRequest(Axios.get(url));
  }
}

let instance = null;
module.exports = (() => {
  if (!instance) {
    instance = new Categories();
  }

  return instance;
})();
