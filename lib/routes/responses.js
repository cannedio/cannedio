'use strict';

const Axios = require('axios');
const Config = require('../config');
const RouteBase = require('./base');

/**
 * Handle all response calls.
 * @class Responses
 */
class Responses extends RouteBase {

  /**
   * Get a response by ID.
   * @param {String} responseID response UUID.
   * @returns {Object} Promise
   */
  get(responseID) {
    const url = Config.endpoint + `/api/responses/get?id=${responseID}`;
    return this.filterRequest(Axios.get(url));
  }
}


let instance = null;
module.exports = (() => {
  if (!instance) {
    instance = new Responses();
  }

  return instance;
})();
