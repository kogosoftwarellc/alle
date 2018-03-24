import isDir from "is-dir";
import path from "path";

export default function isPackage(pkg) {
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
}
