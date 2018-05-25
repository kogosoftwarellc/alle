#!/usr/bin/env node
"use strict";

const program = require("commander");
const alleJson = require("./alle.json");

program
  .version(alleJson.version)
  .description(
    "Monorepo management inspired by https://github.com/boennemann/alle"
  )
  .command("analyze", "Outputs an analysis of package inter-dependencies")
  .command("init [dir...]", "Initialize an alle monorepo")
  .command("install", "Installs dependencies")
  .command("publish [packageName...]", "Publishes packages")
  .command("run <script>", `Runs the npm script in each of the packages`)
  .command("test", "Alias for alle run npm t")
  .alias("t")
  .parse(process.argv);
