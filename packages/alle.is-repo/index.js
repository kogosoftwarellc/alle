import isDir from "is-dir";
import isFile from "is-file";
import path from "path";

export default function isRepo(repoDir) {
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
}
