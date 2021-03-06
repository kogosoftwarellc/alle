const path = require("path");
const constants = require("__fixtures__/constants");
const listPackages = require("alle.list-packages");

describe("listPackages", () => {
  [
    ["when given a repo with a valid package", constants.repoValid, 2],
    ["when not given a directory", "/", 0],
    ["when given a repo with no packages", constants.repoValidNoPackages, 0]
  ].forEach(test => {
    context(test[0], () => {
      it(`should return ${test[2]}`, () => {
        expect(listPackages(test[1]).length).toBe(test[2]);
      });
    });
  });
});
