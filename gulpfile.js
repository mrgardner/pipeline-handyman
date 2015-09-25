'use strict';

var gulp = require('gulp');
require('pipeline-validate-js')(gulp);
require('./src/index.js');

// TODO Update tasks after improving validate-js and test-node.
gulp.task('default', ['pipelineValidateJS']);
