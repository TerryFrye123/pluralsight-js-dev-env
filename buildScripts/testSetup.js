// this file is not transpiled so must use CommonJS and ES5

// register babel to transpile before running tests
require('babel-register');

// disable webpack because mocha does not understand
require.extensions['.css'] = function() {};
