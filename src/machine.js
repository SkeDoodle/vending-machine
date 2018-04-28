const utils = require('./arrayUtils');

/**
 * @param {number[]} currentPool 
 * @param {number[]} acceptedCoins 
 */
function Machine(acceptedCoins, currentPool) {
  if(utils.hasDuplicates(acceptedCoins)) {
    throw(`Accepted coins cannot have duplicates`);
  }
  
  this.acceptedCoins = acceptedCoins;
  
  this.currentPool = currentPool;
}

Machine.prototype.addCoin = function (coin) {
  if(utils.find(coin, this.acceptedCoins) == -1) {
    throw(`A coin of ${coin} value is not accepted`);
  }

  this.currentPool.push(coin);
}

Machine.prototype.removeCoin = function(coin) {
  var index = utils.find(coin, this.currentPool);
  
  if(index == -1) {
    throw(`No more coins ${coin} in the pool`);
  }

  this.currentPool.splice(index, 1);
}

Machine.prototype.containsCoin = function(coin) {
  return utils.find(coin, this.currentPool) != -1;
}

module.exports = Machine;