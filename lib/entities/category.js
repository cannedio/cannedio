'use strict';

const EntityBase = require('./entityBase');

/**
 * @classdesc Category entity.
 * @class
 * @extends EntityBase
 * @memberof Entity
 */
class Category extends EntityBase {

  /**
   * @constructor
   * @param {string} [id=null] Category UUID.
   * @param {string} [label=''] Label of response. Size:  2-256 characters.
   * @param {string} [color='#e3e3e3'] Hexadecimal color with 7 characters (including '#', e.g.: '#ff00ff').
   * @param {Date} [createdAt=new Date()] Creation date.
   * @param {Date} [updatedAt=null] Last update Date.
   */
  constructor(id=null, label='', color='#e3e3e3', createdAt=new Date(), updatedAt=null) {
    super();

    /** @property {string} id Category UUID. */
    this.id = id;

    /** @property {string} label Label of response. Size:  2-256 characters. */
    this.label = label;

    /** @property {string} color Hexadecimal color with 7 characters (including '#', e.g.: '#ff00ff').*/
    this.color = color;

    /** @property {Date} createdAt Creation date. */
    this.createdAt = createdAt;

    /** @property {Date} updatedAt Last update Date. */
    this.updatedAt = updatedAt;
  }
}

module.exports = Category;
