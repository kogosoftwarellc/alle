#!/usr/bin/env node
"use strict";

const program = require("commander");
const alleJson = require("./alle.json");
const listPackages = require("alle.list-packages");

program
  .version(alleJson.version)
  .arguments("[packageName...]")
  .description(
    `Publish each of the packages given. If no packages are given, the packages directory is scanned and the user is prompted in the terminal to choose which available packages they'd like to publish`
  )
  .parse(process.argv);

console.log(listPackages(process.cwd()));
