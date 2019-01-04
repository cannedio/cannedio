'use strict';

const Axios = require('axios');
const Config = require('./config');

Axios.interceptors.request
.use((config) => {
  return new Promise((resolve, reject) => {
    if (!Config.token) {
      return reject('Setup method must be called first');
    }

    config.headers['Authorization'] = 'Bearer ' + Config.token;
    resolve(config);
  });
});

Axios.interceptors.response
.use(
(response) => response, 
(error) => {
  return new Promise((resolve, reject) => {
    if (!error || !error.response) {
      return reject({
        response: {
          data: { message: 'Unknow Error' },
        },
      });
    }

    const status = error.response.status;
    if (status === 401) {
      return reject({
        response: {
          data: { message: 'Invalid Token' },
        },
      });
    }

    reject(error);
  });
});
