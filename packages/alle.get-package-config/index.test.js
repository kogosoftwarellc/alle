const constants = require("__fixtures__/constants");
const getPackageConfig = require("alle.get-package-config");
const path = require("path");

describe("getPackageConfig", () => {
  [
    [
      "when given a repo with a valid package",
      constants.packageValid,
      {
        path: path.resolve(constants.packageValid, "alle.json"),
        config: {
          name: "foo-package",
          version: "0.0.0"
        }
      }
    ],
    ["when given a directory with no config", "/", null]
  ].forEach(test => {
    context(test[0], () => {
      it(`should return ${test[2]}`, () => {
        expect(getPackageConfig(test[1])).toEqual(test[2]);
      });
    });
  });
});
