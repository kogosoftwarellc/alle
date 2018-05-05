#! /usr/bin/env node
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
  .arguments("[dir]")
  .description(
    `Creates a basic alle monorepo structure in the current directory if no directory is given.`
  )
  .action(dir => {
    dir = resolve(process.cwd(), dir);
    // creates dir, packages dir
    fs.ensureSymlinkSync(
      resolve(dir, "packages"),
      resolve(dir, "packages", "node_modules")
    );

    addRulesToIgnoreFiles(dir);
    setRepoPackageJson(dir);
  })
  .parse(process.argv);
