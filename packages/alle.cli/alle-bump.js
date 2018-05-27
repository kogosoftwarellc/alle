#!/usr/bin/env node
"use strict";

const program = require("commander");
const alleJson = require("./alle.json");
const fs = require("fs");
const getPackageConfig = require("alle.get-package-config");
const listPackages = require("alle.list-packages");
const treeStringify = require("tree-stringify");

program
  .version(alleJson.version)
  .description(
    `Bumps monorepo package dependencies in the monorepo packages to current versions.`
  )
  .parse(process.argv);

const packages = listPackages(process.cwd()).map(pkg => {
  pkg.pkgConfig = getPackageConfig(pkg.packageDir);
  return pkg;
});
const changes = {};

function bump(pkg, depKey) {
  const pkgConfig = pkg.pkgConfig;
  const deps = (pkgConfig.config || {})[depKey] || {};
  const depChanges = {};
  let hasChanged;
  Object.keys(deps).forEach(dep => {
    const matchingPkg = packages.find(pkg => pkg.expectedName === dep);
    if (!matchingPkg) return;
    if (!(matchingPkg.expectedName in deps)) return;
    const existingVersion = deps[dep];
    const newVersion = matchingPkg.pkgConfig.config.version;
    if (existingVersion === newVersion) return;
    hasChanged = true;
    depChanges[dep] = `${existingVersion} -> ${newVersion}`;
    deps[dep] = newVersion;
  });
  if (!hasChanged) return;
  if (!changes[pkg.expectedName]) {
    changes[pkg.expectedName] = {};
  }
  changes[pkg.expectedName][depKey] = depChanges;
  fs.writeFileSync(pkgConfig.path, JSON.stringify(pkgConfig.config, null, 2));
}

packages.forEach(pkg => {
  bump(pkg, "dependencies");
  bump(pkg, "devDependencies");
});

if (Object.keys(changes).length) {
  console.log(treeStringify({ changes }));
}
