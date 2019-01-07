'use strict';

const _ = require('lodash');

/**
 * Base struct.
 * @class BaseStruct
 */
class BaseStruct {
  /**
   * Set all fields of a object
   * @param {object} rawData Raw data containing all object information.
   */
  setData(data) {
    for (let i in data) {
      if (this.hasOwnProperty(i)) {
        this[i] = data[i];
      }
    }

    return this;
  }

  toJSON() {
    const json = {};
    for (let i in this) {
      if (!_.isFunction(this[i])) {
        json[i] = this[i];
      }
    }

    return json;
  }
};

module.exports = BaseStruct;
