const path = require("path");
const constants = require("__fixtures__/constants");
const isRepo = require("alle.is-repo");

describe("isRepo", () => {
  [
    [
      "when given a repo with no package.json",
      constants.repoNoPackageJson,
      false
    ],
    [
      "when given a repo with an invalid package.json",
      constants.repoInValidPackageJson,
      false
    ],
    [
      "when given a repo with no packages directory",
      constants.repoNoPackagesDirectory,
      false
    ],
    ["when given a valid repo", constants.repoValid, true]
  ].forEach(test => {
    context(test[0], () => {
      it(`should return ${test[2]}`, () => {
        expect(isRepo(test[1])).toBe(test[2]);
      });
    });
  });
});
