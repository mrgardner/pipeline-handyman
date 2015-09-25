## Pipeline-handyman


## Information

| Package       | Description   | Version|
| ------------- |:-------------:| -----:|
| pipeline-handyman| Pipeline with resources used in several pipes | 0.1.0 |

# Overview

Gulp Pipeline that provides several tools to facilitate the creation of other pipelines.

_repo_: `ssh://git@github.com:kenzanmedia/pipeline-handyman.git`

_jenkins_: `TODO`

## Install
`TODO`

## Usage
```javascript

require('./node_modules/pipeline-handyman/src/index.js');

```

## Results

This pipeline generate the following functions.

__updateConf__

This function facilitates the process of merging two arrays. It is widely use to update the configuration in the pipelines.

```javascript
var handyman = require('./node_modules/pipeline-handyman/src/index.js');

pipelineConfig = handyman.updateConf(defaultConfig, newConfig);

```
__log__

This functions provides a way to log messages in the terminal. You can get feedback from the gulp process on your terminal trough personalized messages.
```javascript
var gulp = require('gulp');
var handyman = require('./node_modules/pipeline-handyman/src/index.js');

handyman.log('Your message');
```


## Dependencies

| Package       | npm link   |
| ------------- |:-------------:|
|gulp| https://www.npmjs.com/package/gulp |
|gulp-load-plugins| https://www.npmjs.com/package/gulp-load-plugins |
|gulp-util| https://www.npmjs.com/package/gulp-util |
|lodash| https://www.npmjs.com/package/lodash |

## devDependencies

| Package       | npm link   |
| ------------- |:-------------:|
|chai| https://www.npmjs.com/package/chai |
|mocha| https://www.npmjs.com/package/mocha |


## LICENSE
