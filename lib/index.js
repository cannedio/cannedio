'use strict';

const Joi = require('joi');

require('./axios-middleware');
const Config = require('./config');
const Schemas = require('./schemas');
const Routes = require('./routes');
const Classes = require('./classes');

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

module.exports = Object.assign(
  Routes,
  { setup: setup },
  Classes
);
