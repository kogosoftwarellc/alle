#!/usr/bin/env node
"use strict";

const program = require("commander");
const alleJson = require("./alle.json");
const listPackages = require("alle.list-packages");
const getPackageConfig = require("alle.get-package-config");
const treeStringify = require("tree-stringify");

program
  .version(alleJson.version)
  .description(`Outputs an analysis of packages inter-dependencies`)
  .parse(process.argv);

const packages = listPackages(process.cwd()).reduce(
  (output, pkg, i, pkgs) => {
    const config = getPackageConfig(pkg.packageDir);
    output.packages[`${pkg.expectedName}@${config.version}`] = Object.keys(
      config.dependencies || {}
    )
      .filter(dep => pkgs.map(pg => pg.expectedName).indexOf(dep) > -1)
      .map(dep => `${dep}@${config.dependencies[dep]}`);
    return output;
  },
  {
    packages: {}
  }
);

console.log(treeStringify(packages));
