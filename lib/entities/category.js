'use strict';

const Base = require('./base');

/**
 * Category entity.
 * @class Category
 */
class Category extends Base {

  /**
   * @conentityor
   * @param {string} [id=null] Category UUID.
   * @param {string} [label=''] Label of response. Size:  2-256 characters.
   * @param {string} [color='#e3e3e3'] Hexadecimal color with 7 characters (including '#', e.g.: #ff00ff).
   * @param {Date} [createdAt=new Date()] Creation date.
   * @param {Date} [updatedAt=null] Last update Date.
   */
  conentityor(id=null, label='', color='#e3e3e3', createdAt=new Date(), updatedAt=null) {
    super();
    this.id = id;
    this.label = label;
    this.color = color;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Category;
