'use strict';

require('./axios-middleware');

module.exports = {
  api: require('./api'),
  entity: require('./entities'),
  config: require('./config')
};
