const path = require("path");

module.exports = {
  packageInValid: path.resolve(
    __dirname,
    "sample-repos",
    "valid-repo-invalid-package",
    "packages",
    "foo-package"
  ),
  packageNameMisMatch: path.resolve(
    __dirname,
    "sample-repos",
    "valid-repo-mismatch-package-name",
    "packages",
    "foo-package"
  ),
  packageNoVersionInPackage: path.resolve(
    __dirname,
    "sample-repos",
    "valid-repo-no-version-in-package",
    "packages",
    "foo-package"
  ),
  packageValid: path.resolve(
    __dirname,
    "sample-repos",
    "valid-repo",
    "packages",
    "foo-package"
  ),
  repoInValidPackageJson: path.resolve(
    __dirname,
    "sample-repos",
    "invalid-package.json"
  ),
  repoNoPackageJson: path.resolve(__dirname, "sample-repos", "no-package.json"),
  repoNoPackagesDirectory: path.resolve(
    __dirname,
    "sample-repos",
    "no-packages-directory"
  ),
  repoValid: path.resolve(__dirname, "sample-repos", "valid-repo"),
  repoValidNoPackages: path.resolve(
    __dirname,
    "sample-repos",
    "valid-repo-no-packages"
  )
};
