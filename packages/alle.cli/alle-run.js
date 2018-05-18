#!/usr/bin/env node
"use strict";

const program = require("commander");
const alleJson = require("./alle.json");

program
  .version(alleJson.version)
  .arguments("[dir]")
  .description(`Runs the command in each of the packages`)
  .action(() => {
    console.log("foooo");
  })
  .parse(process.argv);
