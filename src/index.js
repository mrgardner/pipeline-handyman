'use strict';

var _ = require('lodash');
var plugins = require('gulp-load-plugins')({lazy: true});

module.exports = {

  updateConf: updateConfiguration,
  log: log
};

function updateConfiguration(config, newConfig) {
  return _.merge({}, config, newConfig, replaceArrays);
}

function replaceArrays(a, b) {
  if (_.isArray(a)) {
    return b;
  }
}

function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        plugins.util.log(plugins.util.colors.blue(msg[item]));
      }
    }
  } else {
    plugins.util.log(plugins.util.colors.blue(msg));
  }
}
