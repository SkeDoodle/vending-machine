var Machine = require("./../src/machine");

const AcceptedCoins = [1, 2, 4];

describe("A machine", function() {
  it("constructor should throw when an unaccepted coin is given", function() {
    expect(() => new Machine(AcceptedCoins, [1, 4, 3, 5, 5])).toThrow();
  });

  it("should add coin to its stack", function() {
    let machine = new Machine(AcceptedCoins, [1, 2, 2, 4]);
    
    machine.addCoin(4);
    machine.addCoin(2);

    expect(machine.bank).toEqual([1, 2, 2, 4, 4, 2]);
  });

  it("should remove coin from its stack if it can", function() {
    let machine = new Machine(AcceptedCoins, [1, 2, 2, 4]);
    
    machine.removeCoin(2);
    machine.removeCoin(4);

    expect(machine.bank).toEqual([1, 2]);
    expect(() => machine.removeCoin(5)).toThrow();
  });

  it("should check if it contains a coin it its stack", function() {
    let machine = new Machine(AcceptedCoins, [1, 2, 2, 4]);

    expect(machine.hasCoin(1)).toBeTruthy();
    expect(machine.hasCoin(5)).toBeFalsy();
  });
});