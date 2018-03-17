import isDir from "is-dir";
import path from "path";

export default function isPackage(packageDir) {
  try {
    return (
      isDir.sync(packageDir) &&
      !!require(path.resolve(packageDir, "package.json"))
    );
  } catch (e) {
    return false;
  }
}
