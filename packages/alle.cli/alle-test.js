#! /usr/bin/env node
"use strict";

const program = require("commander");
const alleJson = require("./alle.json");

program
  .version(alleJson.version)
  .description("Alias for alle run npm t")
  .parse(process.argv);
