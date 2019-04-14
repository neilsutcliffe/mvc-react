var sass = require('node-sass');

module.exports = function processSass(data, filename) {
  console.log("Generating styles...")
  var result;
  result = sass.renderSync({
    data: data,
    file: filename
  }).css;
  return result.toString('utf8');
};