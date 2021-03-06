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