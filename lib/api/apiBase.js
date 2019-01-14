'use strict';

const Https = require('https');
const Axios = require('axios');

const Config = require('../config');

/**
 * @classdesc Api Base.
 * @class
 * @private
 * @author Bruno Morceli - pirofagista@gmail.com
 * @memberof API
 */
class ApiBase {

  /**
   * Make a request to the API.
   * @method
   * @async
   * @param {string} [method='get'] Request method allowed values: 'get', 'post', 'put', 'delete'.
   * @param {string} [relativePath=''] Relative path of request.
   * @param {object} [params={}] Data params.
   * @returns {Promise}
   */
  request(method='get', relativePath='',  params={}) {
    
    return new Promise((resolve,  reject) => {
      method = method.toLocaleLowerCase();
      const path = Config.endpoint + relativePath;
      let request = null;
      const options = {
        headers: { Authorization: `Bearer ${Config.token}` },
        httpsAgent: new Https.Agent({ rejectUnauthorized: false })
      };

      if (['put', 'post'].indexOf(method) >= 0) {
        request = Axios[method](path, params, options);
      }
      else {
        options.params = params;
        request = Axios[method](path, options);
      }

      request
      .then(result => resolve(result.data))
      .catch(error => {
        
        if (
          !error || 
          !error.response ||
          !error.response.data || 
          !error.response.data.message
        ) {
          return reject(error && error.Error ? error.Error : 'Unknown Error');
        }

        reject(error.response.data.message);
      });

    });
  }
}

module.exports = ApiBase;
