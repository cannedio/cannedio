'use strict';

const _ = require('lodash');

const ApiBase = require('./apiBase');
const Entities = require('../entities');

/**
 * @classdesc Singleton class that handle every User requests.
 * @class
 * @extends ApiBase
 * @author Bruno Morceli - pirofagista@gmail.com
 * @memberof API 
 * @hideconstructor
 */
class UserAPI extends ApiBase {
  constructor() {
    super();
  }

  /**
   * Get a user by ID.
   * @method
   * @async
   * @param {string} userId user UUID.
   * @returns {Promise}
   * @example
   * CannedIO.api.user
   * .get(userId)
   * .then(user => console.log('success:', user.toJSON()))
   * .catch(error => console.log('something is wrong:', error));
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
   * @example
   * CannedIO.api.user
   * .list()
   * .then(list => console.log('I got', user.length, 'users.'))
   * .catch(error => console.log('something is wrong:', error));
   */
  list() {
    return new Promise((resolve, reject) => {
      this.request('get', '/api/users/list')
      .then(users => {
        resolve(users.map(i => new Entities.user().setData(i)));
      })
      .catch(error => reject(error));

    })
  }

  /**
   * Create a User.
   * @method
   * @async
   * @param {Entity.UserEntity} userObj User entity instance.
   * @returns {Promise}
   * @example
   * const userData = new CannedIO.entity.user(
   *   null, // id (not necessary here).
   *   'user@mycompany.com', // email
   *   'password123' // password
   * );
   * 
   * CannedIO.api.user
   * .get(userData)
   * .then(user => console.log('success:', user.toJSON()))
   * .catch(error => console.log('something is wrong:', error));
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
   * @example
   * CannedIO.api.user
   * .remove(userId)
   * .then(user => console.log('success:', user.toJSON()))
   * .catch(error => console.log('something is wrong:', error));
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
   * @example
   * CannedIO.api.user
   * .logout(userId)
   * .then(user => console.log('success:', user.toJSON()))
   * .catch(error => console.log('something is wrong:', error));
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
    instance = new UserAPI();
  }

  return instance;
})();
