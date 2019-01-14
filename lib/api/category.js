'use strict';

const _ = require('lodash');

const ApiBase = require('./apiBase');
const Entities = require('../entities');

/**
 * @classdesc Singleton class that handle every Category requests..
 * @class
 * @hideconstructor
 * @extends ApiBase
 * @author Bruno Morceli - pirofagista@gmail.com
 * @memberof API 
 */
class Category extends ApiBase {

  /**
   * Get a Category by ID.
   * @param {String} categoryId Category UUID.
   * @returns {Object} Promise.
   */
  get(categoryId) {
    return new Promise((resolve, reject) => {

      this.request('get', '/api/categories/get', { id: categoryId })
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

      this.request('get', '/api/categories/list')
      .then(categories => 
        resolve(categories.map(i => new Entities.category().setData(i)))
      )
      .catch(error => reject(error));

    })
  }

  /**
   * Create a Category.
   * @param {typeof | Category} categoryObj Category classe with all data.
   * @returns {object} Promise.
   */
  create(categoryObj) {

    if (!(categoryObj instanceof Entities.category)) { 
      return Promise.reject('Param "categoryObj" must be instance of "Category" class.');
    }

    return new Promise((resolve, reject) => {

      const data = _.omit(categoryObj.toJSON(), ['id', 'createdAt', 'updatedAt']);
      this.request('post', '/api/categories/create', data)
      .then(category => resolve(new Entities.category().setData(category)))
      .catch(error => reject(error));

    });
  }

  /**
   * Update a Category.
   * @param {typeof | Category} categoryObj Category classe with all data.
   * @returns {object} Promise.
   */
  update(categoryObj) {
    if (!(categoryObj instanceof Entities.category)) { 
      return Promise.reject('Param "categoryObj" must be instance of "Category" class.');
    }

    return new Promise((resolve, reject) => {

      const data = _.omit(categoryObj.toJSON(),  ['createdAt', 'updatedAt']);
      this.request('put', '/api/categories/update', data)
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
    return new Promise((resolve, reject) => {

      this.request('delete', '/api/categories/remove', { id: categoryId })
      .then(category => resolve(new Entities.category().setData(category)))
      .catch(error => reject(error));

    });
  }
}

let instance = null;
module.exports = (() => {
  if (!instance) {
    instance = new Category();
  }

  return instance;
})();
