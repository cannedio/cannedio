'use strict';

const _ = require('lodash');

/**
 * @classdesc Base entity.
 * @class
 * @protected
 */
class EntityBase {
  /**
   * Set all fields of a object.
   * @method
   * @param {object} rawData Raw data containing all object information.
   * @returns { this } Current context.
   */
  setData(data) {
    for (let i in data) {
      if (this.hasOwnProperty(i)) {
        this[i] = data[i];
      }
    }

    return this;
  }

  /**
   * Create a new JavaScript Object Literal containing all class properties.
   * @method
   * @returns {object}
   */
  toJSON() {
    const json = {};
    for (let i in this) {
      if (!_.isFunction(this[i])) {
        json[i] = this[i];
      }
    }

    return json;
  }
}

module.exports = EntityBase;
