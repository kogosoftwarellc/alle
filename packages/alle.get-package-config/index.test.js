import constants from "__fixtures__/constants";
import getPackageConfig from "alle.get-package-config";

describe("getPackageConfig", () => {
  [
    [
      "when given a repo with a valid package",
      constants.packageValid,
      {
        name: "foo-package",
        version: "0.0.0"
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
