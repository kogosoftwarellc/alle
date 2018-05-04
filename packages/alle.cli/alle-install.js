#! /usr/bin/env node
"use strict";

const program = require("commander");
const alleJson = require("./alle.json");

program
  .version(alleJson.version)
  .description(
    `Runs npm i at the repo directory. Creates the symlink packages/node_modules -> packages/ to allow packages to reference each other.`
  )
  .parse(process.argv);
