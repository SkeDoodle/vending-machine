const Machine = require('./machine');

var change = [];

/**
 * 
 * @param {Machine} machine 
 * @param {number} cashBack
 * @returns {number[]} 
 */
var calculateChange = function myself (machine, cashBack) {

  const coin = machine.bank.find(coin => coin <= cashBack);
  
  if(coin == undefined) {
    throw ("Machine out of change.");  
  }

  cashBack = (cashBack * 10 - coin * 10) / 10;

  machine.removeCoin(coin);
  change.push(coin);

  if(cashBack == 0) {
    return change;
  }
  
  return myself(machine, cashBack);   
}

module.exports = { calculateChange };