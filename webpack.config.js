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
    // The configuration for the SERVER ONLY rendering
    name: 'server',
    target: 'node',
    mode: 'development',
    watch: true,
    entry: __dirname + "/mvc.js",
    context: __dirname,
    output: {
      path: __dirname + "/dist",
      filename: 'bundle.js',
      library: 'library',
      libraryTarget: 'commonjs-module',
      globalObject: 'this'
    },
    externals: nodeModules,
    module: {
      rules: [
        {
          // Not Needed. Kept as these libraries are ESSENTIAL for ordinary client side use.
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
        },
        {
          // We pass all source files through babel. This strips any of the above scss files.
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [],
    resolve: {
      // JSON Included since webpack 2. But it still has to look at the file.
      extensions: [".js", ".jsx", '.json']
    }
  };