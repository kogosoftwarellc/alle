const fs = require("fs-extra");
const path = require("path");
const basename = path.basename;
const resolve = path.resolve;

module.exports = function setRepoPackageJson(dir) {
  const repoPackageJsonFile = resolve(dir, "package.json");
  let json;
  if (!fs.existsSync(repoPackageJsonFile)) {
    json = {
      name: basename(dir),
      version: "0.0.0",
      private: true
    };
  } else {
    const repoPackageJson = require(repoPackageJsonFile);
    if (!repoPackageJson.private) {
      repoPackageJson.private = true;
      json = repoPackageJson;
    }
  }

  if (json) {
    fs.writeFileSync(repoPackageJsonFile, JSON.stringify(json, null, 2));
  }
};
