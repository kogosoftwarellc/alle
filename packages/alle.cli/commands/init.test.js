import init from "./init";
import { directory } from "tempy";
import { promisify } from "util";
import { spawn } from "cross-spawn";
import { mkdirSync } from "fs";
import { execFileSync } from "child_process";
import execa from "execa";

const asyncSpawn = promisify(spawn);

describe("init", () => {
  context("when the user does not provide a directory", () => {
    it("should create a project in the current directory", async () => {});
  });
  context("when the user provides a directory", () => {
    it("should create a project in the provided directory", () => {});
  });
});
