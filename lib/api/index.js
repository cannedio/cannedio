'use strict';

/**
 * Handle all API requests.
 * @namespace API
 * @example
 * const CaneedIO = require('node-cannedio');
 * 
 * // setup the module.
 * const token = 'MY_API_TOKEN';
 * const setupError = CannedIO.config.setup(token);
 * if (setupError) {
 *   console.error(setupError);
 *   process.exit();
 * }
 * 
 * // get a specific category
 * CaneedIO.api.category
 * .get(categoryId)
 * .then(cat => console.log('my category:', cat.toJSON()))
 * .catch(error => console.log('error on try to get category:', error));
 * 
 * // get all responses
 * CaneedIO.api.response
 * .list()
 * .then(responses => console.log('responses:', responses.length))
 * .catch(error => console.log('error on try to get response list:', error));
 */
module.exports = {
  user: require('./user'),
  response: require('./response'),
  category: require('./category')
};
