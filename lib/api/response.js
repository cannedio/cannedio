'use strict';

const _ = require('lodash');

const ApiBase = require('./apiBase');
const Entities = require('../entities');

/**
 * @classdesc Singleton class that handle every Response requests.
 * @class
 * @hideconstructor
 * @extends ApiBase
 * @author Bruno Morceli - pirofagista@gmail.com
 * @memberof API
 */
class ResponseAPI extends ApiBase {

  /**
   * Get a response by ID.
   * @method
   * @async
   * @param {string} responseId response UUID.
   * @returns {Promise}
   * @example
   * CannedIO.api.response
   * .get(responseId)
   * .then(resp => console.log('success:', resp.toJSON()))
   * .catch(error => console.log('something is wrong:', error));
   */
  get(responseId) {
    return new Promise((resolve, reject) => {

      this.request('get', '/api/responses/get', { id: responseId })
      .then(response => resolve(new Entities.response().setData(response)))
      .catch(error => reject(error));

    });
  }

  /**
   * Get all active responses.
   * @method
   * @async
   * @returns {Promise}
   * @example
   * CannedIO.api.response
   * .list()
   * .then(list => {
   * 
   *   list.forEach((item, index) => {
   *     console.log('item ' + index + ':', item.toJSON());
   *   });
   * 
   * })
   * .catch(error => console.log('something is wrong:', error));
   */
  list() {
    return new Promise((resolve, reject) => {

      this.request('get', '/api/responses/list')
      .then(responses => 
        resolve(responses.map(i => new Entities.response().setData(i)))
      )
      .catch(error => reject(error));

    });
  }

  /**
   * Create a Response.
   * @method
   * @async
   * @param {Entity.ResponseEntity} responseObj Response entity instance.
   * @returns {Promise}
   * @example
   * // create a new response entity.
   * const responseData = new CannedIO.entity.response(
   *   null, // id
   *   'New sell procedure', // title
   *   'You need to pass all instructions over here...', // response body.
   *   categoryID,
   *   ['sell', 'new', 'procedure', 'anything-else'] // tags
   * );
   * 
   * CannedIO.api.response
   * .create(responseData)
   * .then(newResponse => console.log('success:', newResponse.toJSON()))
   * .catch(error => console.log('something is wrong:', error));
   */
  create(responseObj) {

    if (!(responseObj instanceof Entities.response)) { 
      return Promise.reject('Param "responseObj" must be instance of "Response" class.');
    }

    return new Promise((resolve, reject) => {

      const data = _.omit(responseObj.toJSON(), ['id', 'createdAt', 'updatedAt']);
      this.request('post', '/api/responses/create', data)
      .then(response => resolve(new Entities.response().setData(response)))
      .catch(error => reject(error));

    });
  }

  /**
   * Update a Response.
   * @method
   * @async
   * @param {Entity.ResponseEntity} responseObj Response entity instance.
   * @returns {Promise}
   * @example
   * // get a existing response (you can create a new one too)...
   * existingResponse.title = 'this is my new title';
   * 
   * CannedIO.api.response
   * .update(existingResponse)
   * .then(updatedResponse => console.log('success:', updatedResponse.toJSON()))
   * .catch(error => console.log('something is wrong:', error));
   */
  update(responseObj) {
    if (!(responseObj instanceof Entities.response)) { 
      return Promise.reject('Param "responseObj" must be instance of "Response" class.');
    }

    return new Promise((resolve, reject) => {

      const data = _.omit(responseObj.toJSON(),  ['createdAt', 'updatedAt']);
      this.request('put', '/api/responses/update', data)
      .then(response => resolve(new Entities.response().setData(response)))
      .catch(error => reject(error));

    });
  }

  /**
   * Remove a response by ID.
   * @method
   * @async
   * @param {string} responseId response UUID.
   * @returns {Promise}
   * @example
   * CannedIO.api.response
   * .remove(responseId)
   * .then(resp => console.log('success:', resp.toJSON()))
   * .catch(error => console.log('something is wrong:', error));
   */
  remove(responseId) {
    return new Promise((resolve, reject) => {

      this.request('delete', '/api/responses/remove', { id: responseId })
      .then(response => resolve(new Entities.response().setData(response)))
      .catch(error => reject(error));

    });
  }
}

let instance = null;
module.exports = (() => {
  if (!instance) {
    instance = new ResponseAPI();
  }

  return instance;
})();
