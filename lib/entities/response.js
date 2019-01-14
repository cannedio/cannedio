'use strict';

const EntityBase = require('./entityBase');

/**
 * @classdesc Response entity.
 * @class
 * @extends EntityBase
 * @author Bruno Morceli - pirofagista@gmail.com
 * @memberof Entity
 */
class ResponseEntity extends EntityBase {

  /**
   * @constructor
   * @param {string} [id=null] response UUID.
   * @param {string} [label=''] Label of response. Size:  2-256 characters.
   * @param {string} [response=''] Response itself. Size: 2-10240 characters.
   * @param {string} [categoryId=null] Category UUID.
   * @param {array.<string>} [tags=[]] Response tags. Size: 2-32 characters.
   * @param {Date} [createdAt=new Date()] Creation date.
   * @param {Date} [updatedAt=null] Last update Date.
   */
  constructor(id=null, label='', response='', categoryId=null, tags=[], createdAt=new Date(), updatedAt=null) {
    super();

    /** @property {string} id response UUID. */
    this.id = id;
    
    /** @property {string} label Label of response. Size:  2-256 characters. */
    this.label = label;
    
    /** @property {string} response Response itself. Size: 2-10240 characters. */
    this.response = response;
    
    /** @property {string} categoryId Category UUID. */
    this.categoryId = categoryId;
    
    /** @property {array.<string>} tags Response tags. Size: 2-32 characters. */
    this.tags = tags;
    
    /** @property {Date} createdAt Creation date. */
    this.createdAt = createdAt;
    
    /** @property {Date} updatedAt Last update Date. */
    this.updatedAt = updatedAt;
  }
}

module.exports = ResponseEntity;
