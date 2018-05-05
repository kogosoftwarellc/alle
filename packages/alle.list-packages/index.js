const path = require("path");
const fs = require("fs");
const isDir = require("is-dir");
const isPackage = require("alle.is-package");

module.exports = function listPackages(repoDir) {
  const packagesDir = path.resolve(repoDir, "packages");
  if (!isDir.sync(packagesDir)) {
    return [];
  }
  const pkgs = [];

  const packagesListing = fs.readdirSync(packagesDir);

  packagesListing.filter(entry => entry[0] === "@").forEach(scope => {
    fs
      .readdirSync(path.resolve(packagesDir, scope))
      .map(pkg => ({
        expectedName: `${scope}/${pkg}`,
        packageDir: path.resolve(packagesDir, scope, pkg)
      }))
      .filter(isPackage)
      .forEach(pkg => {
        pkgs.push(pkg);
      });
  });

  packagesListing
    .filter(entry => entry[0] !== "@")
    .map(pkg => ({
      expectedName: `${pkg}`,
      packageDir: path.resolve(packagesDir, pkg)
    }))
    .filter(isPackage)
    .forEach(pkg => {
      pkgs.push(pkg);
    });

  return pkgs;
};
