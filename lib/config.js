'use strict';

const Joi = require('joi');

/**
 * Keep all configurations and preferences.
 * @class Config
 */
class Config {
  constructor() {
    this.token = null;
    this.endpoint = 'https://api.canned.io';
    this.language =  'en';
    this.lastError = null;
  }

  /**
   * Check if the configuration is valid.
   * @returns {boolean} Operation result.
   */
  isValid() {
    return this.token !== null;
  }

  /**
   * Setup CannedIO configurations.
   * @param {String} token Access token given by CannedIO.
   * @param {String} [language='en'] Language used. Allowed inputs: ['en', 'pt'].
   * @param {String} [endpoint='https://api.canned.io'] Endpoint to API.
   * @returns {}
   */
  setup(token, language=null, endpoint=null) {
    const data = {
      token: token,
      endpoint: endpoint,
      language: language,
    };

    const schema = {
      token: Joi.string().min(10).required(),
      endpoint: Joi.string().uri().allow(null),
      language: Joi.string().allow('en', 'pt', null)
    };

    // validate the data.
    const validate = Joi.validate(data, schema);
    if (validate.error) {
      return validate.error.message;
    }

    this.token = token;
    this.endpoint = endpoint ? endpoint : this.endpoint;
    this.language = language ? language : this.language;

    return null;
  }
}

let instance = null;
module.exports = (() => {
  if (!instance) {
    instance = new Config();
  }

  return instance;
})();
