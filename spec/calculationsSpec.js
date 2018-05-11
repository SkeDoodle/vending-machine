const calculations = require("../src/calculations");
const Machine = require("./../src/machine");
const utils = require("./../src/arrayUtils");

const acceptedCoins = [1, 2, 5, .1, .2, .5, .05];

describe('Calculations', function () {
  it('should return an array containing the change', function () {
    
    const bank = [
      5, 5, 5, 5, 5, 5, 5, 5,
      2, 2, 2, 2, 2, 2, 2,
      1, 1, 1, 1, 1, 1, 1,
      .5, .5, .5, .5, .5, .5, .5, .5, .5,
      .1, .1,
      .05, .05, .05, .05, .05, .05, .05, .05, .05
    ];

    const machine = new Machine(acceptedCoins, bank);

    var change = .8;
    var result = calculations.calculateChange(machine, change);

    expect(result).toEqual([.5, .1, .1, .05, .05]);
    expect(utils.coinsToMoney(result)).toEqual(change);
    expect(machine.currentPool).toEqual([
      5, 5, 5, 5, 5, 5, 5, 5,
      2, 2, 2, 2, 2, 2, 2,
      1, 1, 1, 1, 1, 1, 1,
      .5, .5, .5, .5, .5, .5, .5, .5,
      .05, .05, .05, .05, .05, .05, .05
    ]);
  });

  it('should throw when there is not enough coins in the bank', function () {
    const bank = [1];
    const machine = new Machine(acceptedCoins, bank);
    var change = .8;

    expect(() => calculations.calculateChange(machine, change)).toThrow();
  });
});