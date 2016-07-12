'use strict';

var gulp = require('gulp');
var validatePipeline = require('pipeline-validate-js');
var testPipeline = require('pipeline-test-node');

var options = {
  plugins: {
    istanbul: {
      thresholds: {
        global: 80
      }
    }
  }
};

var config = {
  jsFiles: [
    './*.js',
    'src/**/*.js',
    'test/**/*.js'
  ]
};

gulp.task('build', function() {
  return gulp
    .src(config.jsFiles)
    .pipe(validatePipeline.validateJS())
    .pipe(testPipeline.test(options));
});