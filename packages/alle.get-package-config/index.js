const path = require("path");

module.exports = function getPackageConfig(packageDir) {
  console.log(path.resolve(packageDir, "alle.json"));
  try {
    return require(path.resolve(packageDir, "alle.json"));
  } catch (e) {
    return null;
  }
};
