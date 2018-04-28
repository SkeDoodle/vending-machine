const utils = require('./../src/arrayUtils');

describe("Utils.", function() {
  it("hasDuplicates should check if an array contains duplicates", function() {
    expect(utils.hasDuplicates([1, 2, .3, 4, .5])).toBeFalsy();
    expect(utils.hasDuplicates([1, 0.6, .3, .6, .6])).toBeTruthy();
  });

  it("coinsToMoney should sum up each coins into a sum", function() {
    expect(utils.coinsToMoney([1, 2, .2])).toEqual(3.2);
  });
});
