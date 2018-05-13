const Machine = require('./machine');

var change = [];

/**
 * 
 * @param {Machine} machine 
 * @param {number} amount
 * @returns {number[]} change 
 */
var calculateChange = function myself (machine, amount) {

  const coin = machine.bank.find(coin => coin <= amount);
  
  if(coin == undefined) {
    throw ("Machine out of change.");  
  }

  amount = (amount * 10 - coin * 10) / 10;

  machine.removeCoin(coin);
  change.push(coin);

  if(amount == 0) {
    return change;
  }
  
  return myself(machine, amount);   
}

module.exports = { calculateChange };