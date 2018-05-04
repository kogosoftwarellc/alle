#! /usr/bin/env node
"use strict";

const program = require("commander");
const alleJson = require("./alle.json");

program
  .version(alleJson.version)
  .description(
    `Publish each of the packages given. If no packages are given, the packages directory is scanned and the user is prompted in the terminal to choose which available packages they'd like to publish`
  )
  .parse(process.argv);
