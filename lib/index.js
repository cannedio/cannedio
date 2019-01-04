'use strict';

const Joi = require('joi');

require('./axios-middleware');
const Config = require('./config');
const Schemas = require('./schemas');
const Routes = require('./routes');

function setup(data) {
  return new Promise((resolve, reject) => {
    const validate = Joi.validate(data, Schemas.setup);

    if (validate.error) {
      return reject(validate.error.message);
    }

    Config.token = data.token;
    Config.endpoint = data.endpoint || 'http://localhost:3001' //'https://api.canned.io';
    Config.language = data.language || 'en';

    resolve();
  });
}

module.exports = Object.assign(Routes, { setup: setup });

/*
//debug
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOiIyMDE4LTEyLTA5VDA2OjExOjM5LjY5NFoiLCJvd25lcklkIjoiNTlhYTNhZmRjYjEwYWY2OGNlYTViNWRhIiwicmVtb3RlQWRkcmVzcyI6IjEyNy4wLjAuMSIsImlhdCI6MTU0NDMzNTg5OX0._hmCbx8zNvqy7vkSkntAdgPtr3O-xLNI2r7h4knhYgo';
setup({ token: token })
.then(() => {
  Routes.users
  .get('59b02ce5a38350453e6a7dd5')
  .then(user => console.log(user))
  .catch(error => console.log('error:', error));

  Routes.responses
  .get('59aa3b0550cea1694a3cd5af')
  .then(response => console.log(response))
  .catch(error => console.log('error:', error));

  Routes.categories
  .get('59b3eb99a38350453e6a7ded')
  .then(response => console.log(response))
  .catch(error => console.log('error:', error));
})
.catch(error => console.log('error:', error));
*/
