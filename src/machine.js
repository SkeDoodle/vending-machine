const utils = require('./arrayUtils');

/**
 * @param {number[]} currentPool 
 * @param {number[]} acceptedCoins 
 */
function Machine(acceptedCoins, currentPool) {
  const refusedCoins = getRefusedCoins(currentPool, acceptedCoins);

  if(refusedCoins.length > 0) {
    throw(`Some coins were refused: [${refusedCoins}].`);
  }

  if(utils.hasDuplicates(acceptedCoins)) {
    throw(`Accepted coins cannot have duplicates`);
  }
  
  this.acceptedCoins = acceptedCoins;
  this.currentPool = currentPool;
}

Machine.prototype.addCoin = function (coin) {
  if(!isCoinAccepted(coin, this.acceptedCoins)) {
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

Machine.prototype.hasCoin = function(coin) {
  return utils.find(coin, this.currentPool) != -1;
}

module.exports = Machine;

/**
 * 
 * @param {number[]} coins 
 * @param {number[]} acceptedCoins 
 */
function getRefusedCoins(coins, acceptedCoins) {
  let refusedCoins = [];

  coins.forEach(coin => {
    if(!isCoinAccepted(coin, acceptedCoins)) {
      refusedCoins.push(coin);
    }
  });

  return refusedCoins;
}

/**
 * 
 * @param {number} coin 
 * @param {number[]} acceptedCoins 
 */
function isCoinAccepted(coin, acceptedCoins) {
  return utils.find(coin, acceptedCoins) != -1;
}