/* global require, module */
'use strict';

var _ = require('lodash');
var plugins = require('gulp-load-plugins')({lazy: true});
var fs = require('fs');

module.exports = {

  updateConf: updateConfiguration,
  log: log,
  getPackageName: getPackageName
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

function getPackageName() {
  var packageJson = JSON.parse(fs.readFileSync('./package.json'));
  return packageJson.name;
}
