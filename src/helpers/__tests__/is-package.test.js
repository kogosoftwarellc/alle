import path from "path";
import constants from "__fixtures__/constants";
import isPackage from "../is-package";

describe("isPackage", () => {
  [
    ["when given a valid package", constants.packageValid, true],
    ["when given an invalid package", constants.packageInValid, false]
  ].forEach(test => {
    context(test[0], () => {
      it(`should return ${test[2]}`, () => {
        expect(isPackage(test[1])).toBe(test[2]);
      });
    });
  });
});
