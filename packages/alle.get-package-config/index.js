const path = require("path");

module.exports = function getPackageConfig(packageDir) {
  try {
    const configPath = path.resolve(packageDir, "alle.json");
    return {
      path: configPath,
      config: require(configPath)
    };
  } catch (e) {
    const configPath = path.resolve(packageDir, "package.json");
    try {
      return {
        path: configPath,
        config: require(configPath)
      };
    } catch (ep) {
      return null;
    }
  }
};
