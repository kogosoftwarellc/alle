const path = require("path");

module.exports = function getPackageConfig(packageDir) {
  try {
    return require(path.resolve(packageDir, "alle.json"));
  } catch (e) {
    try {
      return require(path.resolve(packageDir, "package.json"));
    } catch (ep) {
      return null;
    }
  }
};
