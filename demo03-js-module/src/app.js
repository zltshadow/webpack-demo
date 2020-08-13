/**
 * webpack支持ES6、CommonJs和AMD规范
 */

// ES6
import es6Hello from './lib/hello-es6';
es6Hello();

// CommonJs
var commonHello = require('./lib/hello-common');
commonHello();

// AMD
var amdHello = require('./lib/hello-amd');
amdHello();

// UMD
var umdHello = require('./lib/hello-umd');
umdHello();

// CommonJs，AMD，UMD可以统一引入
require(['./lib/hello-common', './lib/hello-amd', './lib/hello-umd'], function (commonHello, amdHello, umdHello) {
  commonHello();
  amdHello();
  umdHello();
});