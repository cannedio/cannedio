'use strict';

class Config {
  constructor() {
    this.token = null;
    this.endpoint = 'https://api.canned.io';
    this.language =  'en';
  }

  isValid() { return this.token !== null; }
}

let instance = null;
module.exports = (() => {
  if (!instance) {
    instance = new Config();
  }

  return instance;
})();
