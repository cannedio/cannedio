'use strict';

const Axios = require('axios');
const Config = require('../config');
const RouteBase = require('./base');

/**
 * Handle all user calls.
 * @class Users
 */
class Users extends RouteBase {

  /**
   * Get a user by ID.
   * @param {String} userID User UUID.
   * @returns {Object} Promise
   */
  get(userID) {
    const url = Config.endpoint + `/api/users/get?id=${userID}`;
    return this.filterRequest(Axios.get(url));
  }
}

let instance = null;
module.exports = (() => {
  if (!instance) {
    instance = new Users();
  }

  return instance;
})();
