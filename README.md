## Pipeline-handyman


## Information

| Package       | Description   | Version|
| ------------- |:-------------:| -----:|
| pipeline-handyman| Pipeline with resources used in several pipes | 0.1.0 |

# Overview

Gulp Pipeline that provides several tools to facilitate the creation of other pipelines.

_repo_: `ssh://git@github.com:kenzanmedia/pipeline-handyman.git`

_jenkins_: `https://kenzan.ci.cloudbees.com/job/CI-pipeline-handyman/`

## Install
`npm install git+ssh://git@github.com/kenzanmedia/pipeline-handyman.git`

## Usage

### updateConf

This function facilitates the process of merging two arrays. It is widely use to update the configuration in the pipelines.

```javascript
var handyman = require('pipeline-handyman');

pipelineConfig = handyman.updateConf(defaultConfig, newConfig);

```

### log

This functions provides a way to log messages in the terminal. You can get feedback from the gulp process on your terminal through personalized messages.

```javascript
var gulp = require('gulp');
var handyman = require('pipeline-handyman');

handyman.log('Your message');
```

### getPackageName

This functions allows you to obtain the package name. This can be useful, for example, during minification processes when you need to name the build packages.

```javascript
var gulp = require('gulp');
var handyman = require('pipeline-handyman');

handyman.getPackageName();
```


## LICENSE
