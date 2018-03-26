const chalk = require("chalk");
const flowRight = require("lodash.flowright");
const validateNPMPackageName = require("validate-npm-package-name");
const { resolve, basename, join } = require("path");
const { EOL } = require("os");
const {
  readdirSync,
  ensureDirSync,
  writeFile,
  ensureDir
} = require("fs-extra");

const printNPMNameErrors = results => {
  if (results) {
    results.forEach(err => console.error(chalk.red(` - ${err}`)));
  }
};

const validateProjectName = path => {
  const name = basename(path);
  const results = validateNPMPackageName(name);
  if (!results.validForNewPackages) {
    console.error(
      `Could not crate a package ${chalk.green(
        name
      )} due to npm naming restrictions`
    );
    printNPMNameErrors(results.errors);
    printNPMNameErrors(results.warnings);
    process.exit(1);
  }

  return path;
};

const createRootDir = path => {
  ensureDirSync(path);

  return path;
};

const isSafeToContinue = path => {
  const unsafeFilesAndDirs = ["package.json", "alle.json", "packages"];

  const contentsOfDir = readdirSync(path).filter(content =>
    unsafeFilesAndDirs.includes(content)
  );
  for (const fileOrDir of contentsOfDir) {
    console.error(
      `${chalk.red(
        fileOrDir
      )} already exists in the directory and may cause conflicts please remove and try again`
    );
  }
  if (contentsOfDir.length) {
    process.exit(1);
  }

  return path;
};

const writePackageJson = path => {
  const packageJson = {
    name: basename(path),
    version: "0.1.0",
    private: true
  };
  writeFile(
    join(path, "package.json"),
    JSON.stringify(packageJson, null, 2) + EOL
  );

  return path;
};

const createPackagesDir = path => {
  ensureDir(join(path, "packages/node_modues"));
  return path;
};

const createProject = flowRight([
  createPackagesDir,
  writePackageJson,
  isSafeToContinue,
  createRootDir,
  validateProjectName
]);

const init = async (name = __dirname) => {
  const root = resolve(name);
  createProject(root);
};

module.exports = init;
