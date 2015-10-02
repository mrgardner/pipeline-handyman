'use strict';

var gulp = require('gulp');
var validatePipeline = require('pipeline-validate-js')();
var testPipeline = require('pipeline-test-node')();
require('./src/index.js');

var config = {
  files: [
   'src/**/*.js',
   'test/**/*.js'
  ]
};


gulp.task('default', function(){
  gulp
    .src(config.files)
    .pipe(validatePipeline.validateJS())
    .pipe(testPipeline.test());
});
