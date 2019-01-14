'use strict';

const _ = require('lodash');

const ApiBase = require('./apiBase');
const Entities = require('../entities');

/**
 * @classdesc Singleton class that handle every User requests.
 * @class
 * @hideconstructor
 * @extends ApiBase
 * @author Bruno Morceli - pirofagista@gmail.com
 * @memberof API 
 */
class User extends ApiBase {
  constructor() {
    super();
  }

  /**
   * Get a user by ID.
   * @method
   * @param {string} userId user UUID.
   * @async
   * @returns {Promise}
   */
  get(userId) {
    return new Promise((resolve, reject) => {

      this.request('get', '/api/users/get', { id: userId })
      .then(user => resolve(new Entities.user().setData(user)))
      .catch(error => reject(error));

    })
  }

  /**
   * Get all active users.
   * @method
   * @async
   * @returns {Promise}
   */
  list() {
    return new Promise((resolve, reject) => {

      this.request('get', '/api/users/list')
      .then(users => 
        resolve(users.map(i => new Entities.user().setData(i)))
      )
      .catch(error => reject(error));

    })
  }

  /**
   * Create a User.
   * @method
   * @async
   * @param {typeof | User} userObj User classe with all data.
   * @returns {Promise}
   */
  create(userObj) {

    if (!(userObj instanceof Entities.user)) { 
      return Promise.reject('Param "userObj" must be instance of "User" class.');
    }

    return new Promise((resolve, reject) => {

      const data = _.pick(userObj.toJSON(), [
        'email',
        'password'
      ]);

      this.request('post', '/api/users/create', data)
      .then(user => resolve(new Entities.user().setData(user)))
      .catch(error => reject(error));

    });
  }

  /**
   * Remove a user by ID.
   * @method
   * @async
   * @param {string} userId user UUID.
   * @returns {Promise}
   */
  remove(userId) {
    return new Promise((resolve, reject) => {
      
      this.request('delete', '/api/users/remove', { id: userId })
      .then(user => resolve(new Entities.user().setData(user)))
      .catch(error => reject(error));
      
    });
  }
  
  /**
   * Logout a user by ID.
   * @method
   * @async
   * @param {String} userId User UUID.
   * @returns {Promise}
   */
  logout(userId) {
    return new Promise((resolve, reject) => {
      this.request('get', '/api/users/logout', { id: userId })
      .then(user => resolve(new Entities.user().setData(user)))
      .catch(error => reject(error));
    });
  }
}

let instance = null;
module.exports = (() => {
  if (!instance) {
    instance = new User();
  }

  return instance;
})();
