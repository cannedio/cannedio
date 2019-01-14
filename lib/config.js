'use strict';

const Joi = require('joi');

/**
 * Singleton class that keep all API settings.
 * @class
 * @author Bruno Morceli - pirofagista@gmail.com
 * @hideconstructor
 * @example
 * const CaneedIO = require('node-cannedio');
 * 
 * // you must call the setup method at least once while running the application.
 * const token = 'MY_API_TOKEN';
 * const setupError = CannedIO.config.setup(token);
 * if (setupError) {
 *   console.error(setupError);
 *   process.exit();
 * }
 * 
 * // start all requests...
 * 
 */
class Config {

  constructor() {
    this.token = null;
    this.endpoint = 'https://api.canned.io';
    this.language =  'en';
    this.lastError = null;
  }

  /**
   * Setup CannedIO configurations.
   * @method
   * @param {string} token Access token given by CannedIO API.
   * @param {string} [language='en'] Language used. Allowed inputs: ['en', 'pt'].
   * @param {string} [endpoint='https://api.canned.io'] Endpoint to API.
   * @returns {string} Return null whether success, otherwise an error message.
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
