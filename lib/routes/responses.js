'use strict';

const Axios = require('axios');
const _ = require('lodash');
const Config = require('../config');
const RouteBase = require('./base');
const Classes = require('../classes');

/**
 * Handle all response calls.
 * @class Responses
 */
class Responses extends RouteBase {

  /**
   * Get a response by ID.
   * @param {string} responseId response UUID.
   * @returns {object} Promise.
   */
  get(responseId) {
    return new Promise((resolve, reject) => {

      const url = Config.endpoint + `/api/responses/get?id=${responseId}`;
      this.filterRequest(Axios.get(url))
      .then(response => resolve(new Classes.response().setData(response)))
      .catch(error => reject(error));

    })
  }

  /**
   * Get all active responses.
   * @returns {object} Promise.
   */
  list() {
    return new Promise((resolve, reject) => {

      const url = Config.endpoint + '/api/responses/list';
      return this.filterRequest(Axios.get(url))
      .then(responses => 
        resolve(responses.map(i => new Classes.response().setData(i)))
      )
      .catch(error => reject(error));

    })
  }

  /**
   * Create a Response.
   * @param {typeof Response} responseObj Response classe with all data.
   * @returns {object} Promise.
   */
  create(responseObj) {
    if (!(responseObj instanceof Classes.response)) { 
      return Promise.reject('Param "responseObj" must be instance of "Response" class.');
    }

    const url = Config.endpoint + '/api/responses/create';
    return new Promise((resolve, reject) => {

      const data = _.omit(responseObj.toJSON(), ['id', 'createdAt', 'updatedAt']);
      this.filterRequest(Axios.post(url, data))
      .then(response => resolve(new Classes.response().setData(response)))
      .catch(error => reject(error));

    });
  }

  /**
   * Update a Response.
   * @param {typeof Response} responseObj Response classe with all data.
   * @returns {object} Promise.
   */
  update(responseObj) {
    if (!(responseObj instanceof Classes.response)) { 
      return Promise.reject('Param "responseObj" must be instance of "Response" class.');
    }

    const url = Config.endpoint + '/api/responses/update';
    return new Promise((resolve, reject) => {

      const data = _.omit(responseObj.toJSON(),  ['createdAt', 'updatedAt']);
      this.filterRequest(Axios.put(url, data))
      .then(response => resolve(new Classes.response().setData(response)))
      .catch(error => reject(error));

    });
  }

  /**
   * Remove a response by ID.
   * @param {string} responseId response UUID.
   * @returns {object} Promise.
   */
  remove(responseId) {
    const url = Config.endpoint + `/api/responses/remove?id=${responseId}`;
    return new Promise((resolve, reject) => {

      this.filterRequest(Axios.delete(url))
      .then(response => resolve(new Classes.response().setData(response)))
      .catch(error => reject(error));

    });
  }
}

let instance = null;
module.exports = (() => {
  if (!instance) {
    instance = new Responses();
  }

  return instance;
})();
