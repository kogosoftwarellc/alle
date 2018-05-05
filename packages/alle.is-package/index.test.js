const path = require("path");
const constants = require("__fixtures__/constants");
const isPackage = require("alle.is-package");

describe("isPackage", () => {
  [
    [
      "when given a valid package",
      {
        expectedName: "foo-package",
        packageDir: constants.packageValid
      },
      true
    ],
    [
      "when given an invalid package",
      {
        expectedName: "foo-package",
        packageDir: constants.packageInValid
      },
      false
    ],
    [
      "when given a mismatched package",
      {
        packageDir: constants.packageNameMisMatch,
        expectedName: "foo-package"
      },
      false
    ],
    [
      "when given a package with no version",
      {
        packageDir: constants.packageNoVersionInPackage,
        expectedName: "foo-package"
      },
      false
    ]
  ].forEach(test => {
    context(test[0], () => {
      it(`should return ${test[2]}`, () => {
        expect(isPackage(test[1])).toBe(test[2]);
      });
    });
  });
});
