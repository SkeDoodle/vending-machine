const utils = require('./../src/arrayUtils');

describe("Utils", function() {
  it("should check if an array contains duplicates", function() {
    expect(utils.hasDuplicates([1, 2, .3, 4, .5])).toBeFalsy();
    expect(utils.hasDuplicates([1, 0.6, .3, .6, .6])).toBeTruthy();
  });
});
