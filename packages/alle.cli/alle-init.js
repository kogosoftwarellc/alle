#!/usr/bin/env node
"use strict";

const program = require("commander");
const alleJson = require("./alle.json");
const path = require("path");
const resolve = path.resolve;
const mkdirp = require("mkdirp");
const addRulesToIgnoreFiles = require("./util/add-rules-to-ignore-files");
const setRepoPackageJson = require("./util/set-repo-package-json");
const fs = require("fs-extra");

program
  .version(alleJson.version)
  .arguments("[dir...]")
  .description(
    `Creates a basic alle monorepo structure in the current directory if no directory is given.`
  )
  .parse(process.argv);

program.args.forEach(dir => {
  dir = resolve(process.cwd(), dir);
  const packagesDir = resolve(dir, "packages");
  mkdirp.sync(packagesDir);
  fs.ensureSymlinkSync(packagesDir, resolve(packagesDir, "node_modules"));
  addRulesToIgnoreFiles(dir);
  setRepoPackageJson(dir);
});
