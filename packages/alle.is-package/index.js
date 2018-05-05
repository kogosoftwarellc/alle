const isDir = require("is-dir");
const path = require("path");

module.exports = function isPackage(pkg) {
  try {
    const packageDir = pkg.packageDir;
    const config = require(path.resolve(packageDir, "alle.json"));
    return (
      isDir.sync(packageDir) &&
      !!config.version &&
      pkg.expectedName === config.name
    );
  } catch (e) {
    return false;
  }
};
