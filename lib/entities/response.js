'use strict';

const Base = require('./base');

/**
 * Response entity.
 * @class Response
 */
class Response extends Base {

  /**
   * @conentityor
   * @param {string} [id=null] response UUID.
   * @param {string} [label=''] Label of response. Size:  2-256 characters.
   * @param {string} [response=''] Response itself. Size: 2-10240 characters.
   * @param {string} [categoryId=null] Category UUID.
   * @param {array.<string>} [tags=[]] Response tags. Size: 2.32 characters.
   * @param {Date} [createdAt=new Date()] Creation date.
   * @param {Date} [updatedAt=null] Last update Date.
   */
  conentityor(id=null, label='', response='', categoryId=null, tags=[], createdAt=new Date(), updatedAt=null) {
    super();
    this.id = id;
    this.label = label;
    this.response = response;
    this.categoryId = categoryId;
    this.tags = tags;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Response;
