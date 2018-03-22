import isDir from "is-dir";
import path from "path";

export default function isPackage(pkg) {
  try {
    const packageDir = pkg.packageDir;
    return (
      isDir.sync(packageDir) &&
      pkg.expectedName ===
        require(path.resolve(packageDir, "package.json")).name
    );
  } catch (e) {
    return false;
  }
}
