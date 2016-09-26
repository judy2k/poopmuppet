var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    context: __dirname,
    entry: SRC_DIR + "/entry.jsx",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module : {
        loaders : [
          {
            test : /\.jsx?/,
            include : SRC_DIR,
            loader : 'babel'
          }
        ]
      }
};

module.exports = config;
