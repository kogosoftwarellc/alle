const createDependencyTree = require("alle.create-dependency-tree");

describe("createDependencyTree", () => {
  [
    ["when not given an array", null, {}],
    ["when not given any packages", [], {}],
    [
      "when given packages with no dependencies",
      [
        {
          name: "foo"
        },
        {
          name: "doo"
        }
      ],
      {
        doo: [],
        foo: []
      }
    ],
    [
      "when given packages with dependencies",
      [
        {
          name: "foo",
          dependencies: {
            doo: "*",
            lodash: "*"
          }
        },
        {
          name: "doo"
        }
      ],
      {
        doo: [],
        foo: ["doo"]
      }
    ]
  ].forEach(test => {
    context(test[0], () => {
      it(`should output an expected tree`, () => {
        expect(createDependencyTree(test[1])).toEqual(test[2]);
      });
    });
  });
});
