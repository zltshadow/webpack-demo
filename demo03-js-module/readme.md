# [参考出处](https://juejin.im/post/5ce8f81de51d454f73356cbd)

## demo03 webpack默认支持各种模块化规范

### 1.模块化规范

webpack 默认支持 `es6` , `Commonjs` , `AMD` , `umd` 规范。

详见 webpack 模块文档: [https://www.webpackjs.com/concepts/modules/](https://www.webpackjs.com/concepts/modules/)

### 2.目录结构

```javascript
// `--` 代表目录， `-` 代表文件
--demo03
  --src
    --lib
      -hello-amd.js
      -hello-common.js
      -hello-es6.js
      -hello-umd.js
    -app.js
  -index.html
  -webpack.config.js
```

hello-amd.js

```javacript
// 使用amd规范来写代码
define(function (require, factory) {
  'use strict';
  return function () {
    console.log('amd: hello world!');
  }
});
```

hello-common.js

```javacript
// 使用commonjs规范来写代码
module.exports = function () {
  console.log('common: hello world!');
};
```

hello-es6.js

```javacript
// 使用es6规范来写代码
export default function () {
  console.log('es6: hello world!');
}
```

hello-umd.js

```javacript
// 使用umd规范来写代码
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  // START OF YOUR CODE
  const umdHello = () => {
    console.log("umd: hello world!")
  }
  return umdHello;
  // END OF YOUR CODE
}));
```

app.js

```javacript
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
```

### 3.编写 webpack 配置文件

webpack.config.js

```javacript
const path = require("path");

module.exports = {
  mode: 'production' || 'development',
  entry: {
    app: "./src/app.js"
  },
  output: {
    publicPath: __dirname + "/dist/", // 打包后资源文件的引用会基于此路径
    path: path.resolve(__dirname, "dist"), // 打包后的输出目录
    filename: "app.bundle.js"
  }
};
```

### 4.执行打包命令

>(默认你已经安装了全局 webpack 以及 webpack-cli )

```javacript
webpack
```

打包成功后，打包结果在 dist 文件夹中

### 5.验证打包结果

创建 index.html 文件,引用打包好的主文件 (bundle.js) , 利用 Chrome 浏览器打开，并查看控制台。

输出结果：

```javacript
es6: hello world!
common: hello world!
amd: hello world!
umd: hello world!
common: hello world!
amd: hello world!
umd: hello world!
```

### 6.源码地址

demo 代码地址: <https://github.com/zltshadow/webpack-demo/tree/master/demo03-js-module>

仓库代码地址(及目录): <https://github.com/zltshadow/webpack-demo>
