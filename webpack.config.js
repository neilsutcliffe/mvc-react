var path = require('path');
var fs = require('fs');
var nodeModules = {};


fs.readdirSync(path.resolve(__dirname, 'node_modules'))
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports =
  {
    // The configuration for the server-side rendering
    name: 'server',
    target: 'node',
    mode: 'development',
    entry: __dirname + "/app.js",
    context: __dirname + "/app",
    output: {
      path: __dirname + "/dist",
      filename: 'bundle.js',
      library: 'library',
      libraryTarget: 'commonjs-module',
      globalObject: 'this'
    },
    externals: nodeModules,
    module: {
      rules: [{
        test: /\.(js|jsx|scss)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'isomorphic-style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.json$/, loader: 'json-loader'
      },
      ]
    },
    plugins: [],
    resolve: {
      extensions: [".js", ".jsx"]
    }
  };