import path from "path";
import fs from "fs";
import isDir from "is-dir";
import isPackage from "alle.is-package";

export default function listPackages(repoDir) {
  const packagesDir = path.resolve(repoDir, "packages");
  if (!isDir.sync(packagesDir)) {
    return [];
  }

  return fs
    .readdirSync(packagesDir)
    .filter(pkg => isPackage(path.resolve(packagesDir, pkg)));
}
