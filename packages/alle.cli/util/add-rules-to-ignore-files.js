const fs = require("fs-extra");
const resolve = require("path").resolve;
const isDir = require("is-dir");

module.exports = function handleIgnoreFiles(dir) {
  const ignoreFiles = [
    {
      file: resolve(dir, ".npmignore"),
      rules: [[/^packages\/$/gm, "packages/"]]
    }
  ];

  if (isDir.sync(resolve(dir, ".git"))) {
    const gitignore = resolve(dir, ".gitignore");
    ignoreFiles.push({
      file: gitignore,
      rules: [
        [/^packages\/\*\/package\.json$/gm, "packages/*/package.json"],
        [/^packages\/\*\/package-lock\.json$/gm, "packages/*/package-lock.json"]
      ]
    });
  }

  ignoreFiles.forEach(ignoreFile => {
    fs.ensureFileSync(ignoreFile.file);
    let ignoreContents = fs.readFileSync(ignoreFile.file, "utf8");
    ignoreFile.rules.forEach(rule => {
      if (!rule[0].test(ignoreContents)) {
        ignoreContents += `\n${rule[1]}`;
      }
    });
    fs.writeFileSync(ignoreFile.file, ignoreContents);
  });
};
