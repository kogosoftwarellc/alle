const isDir = require("is-dir");
const path = require("path");
const getPackageConfig = require("alle.get-package-config");

module.exports = function isPackage(pkg) {
  try {
    const packageDir = pkg.packageDir;
    const config = getPackageConfig(packageDir);
    return (
      isDir.sync(packageDir) &&
      !!config.version &&
      pkg.expectedName === config.name
    );
  } catch (e) {
    return false;
  }
};
