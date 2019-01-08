'use strict';

const Axios = require('axios');
const _ = require('lodash');

const RouteBase = require('./base');
const Config = require('../config');
const Entities = require('../entities');

/**
 * Handle all category calls.
 * @class Categories
 */
class Categories extends RouteBase {

  /**
   * Get a Category by ID.
   * @param {String} categoryId Category UUID.
   * @returns {Object} Promise.
   */
  get(categoryId) {
    const url = Config.endpoint + `/api/categories/get?id=${categoryId}`;
    return new Promise((resolve, reject) => {
      this.filterRequest(Axios.get(url))
      .then(category => resolve(new Entities.category().setData(category)))
      .catch(error => reject(error));
    });
  }

  /**
   * Get all active categories.
   * @returns {object} Promise.
   */
  list() {
    return new Promise((resolve, reject) => {

      const url = Config.endpoint + '/api/categories/list';
      return this.filterRequest(Axios.get(url))
      .then(categories => 
        resolve(categories.map(i => new Entities.category().setData(i)))
      )
      .catch(error => reject(error));

    })
  }

  /**
   * Create a Category.
   * @param {typeof Category} categoryObj Category classe with all data.
   * @returns {object} Promise.
   */
  create(categoryObj) {

    if (!(categoryObj instanceof Entities.category)) { 
      return Promise.reject('Param "categoryObj" must be instance of "Category" class.');
    }

    const url = Config.endpoint + '/api/categories/create';
    return new Promise((resolve, reject) => {

      const data = _.omit(categoryObj.toJSON(), ['id', 'createdAt', 'updatedAt']);
      this.filterRequest(Axios.post(url, data))
      .then(category => resolve(new Entities.category().setData(category)))
      .catch(error => reject(error));

    });
  }

  /**
   * Update a Category.
   * @param {typeof Category} categoryObj Category classe with all data.
   * @returns {object} Promise.
   */
  update(categoryObj) {
    if (!(categoryObj instanceof Entities.category)) { 
      return Promise.reject('Param "categoryObj" must be instance of "Category" class.');
    }

    const url = Config.endpoint + '/api/categories/update';
    return new Promise((resolve, reject) => {

      const data = _.omit(categoryObj.toJSON(),  ['createdAt', 'updatedAt']);
      this.filterRequest(Axios.put(url, data))
      .then(category => resolve(new Entities.category().setData(category)))
      .catch(error => reject(error));

    });
  }

  /**
   * Remove a category by ID.
   * @param {string} categoryId category UUID.
   * @returns {object} Promise.
   */
  remove(categoryId) {
    const url = Config.endpoint + `/api/categories/remove?id=${categoryId}`;
    return new Promise((resolve, reject) => {

      this.filterRequest(Axios.delete(url))
      .then(category => resolve(new Entities.category().setData(category)))
      .catch(error => reject(error));

    });
  }
}

let instance = null;
module.exports = (() => {
  if (!instance) {
    instance = new Categories();
  }

  return instance;
})();
