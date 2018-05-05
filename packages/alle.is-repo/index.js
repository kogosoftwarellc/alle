const isDir = require("is-dir");
const isFile = require("is-file");
const path = require("path");

module.exports = function isRepo(repoDir) {
  const repoPackageJson = path.resolve(repoDir, "package.json");
  try {
    return (
      isDir.sync(repoDir) &&
      isDir.sync(path.resolve(repoDir, "packages")) &&
      isFile.sync(repoPackageJson) &&
      !!require(repoPackageJson)
    );
  } catch (e) {
    return false;
  }
};
