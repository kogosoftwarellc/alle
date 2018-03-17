import path from 'path';

const repoDirWithNoPackages = path.resolve(__dirname, '../../../__fixtures__/no-package.json');

describe('listPackages', () => {
  context('when given a repo directory with no valid packages', () => {
    it('should return an empty array', () => {

    });
  });
});
