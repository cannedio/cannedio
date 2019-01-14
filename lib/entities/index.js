'use strict';

/**
 * Keep all API entities to handle their data.
 * @namespace Entity
 * @example
 * const CannedIO = require('node-cannedio');
 * 
 * ...
 * 
 * // create a local user entity instance.
 * const myUser = new CannedIO.entity.user(null, 'test@example.com', 'pwd123');
 * 
 * // and then let's try to create a new user.
 * CannedIO.api.user
 * .create(myUser)
 * .then(createdUser => console.log('My new user:', createdUser.toJSON()))
 * .catch(error => console.log('error on try to create a new user: ', error));
 * 
 */
module.exports = {
  user: require('./user'),
  response: require('./response'),
  category: require('./category')
};
