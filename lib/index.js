'use strict';

/**
 * Start namespace
 * @namespace CannedIO
 * @author Bruno Morceli - pirofagista@gmail.com
 * @example
 * const CaneedIO = require('node-cannedio');
 * 
 * ...
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
  api: require('./api'),
  entity: require('./entities'),
  config: require('./config')
};
