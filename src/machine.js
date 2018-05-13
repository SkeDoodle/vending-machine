const utils = require('./arrayUtils');

/**
 * @param {number[]} bank 
 * @param {number[]} acceptedCoins 
 */
function Machine(acceptedCoins, bank) {
  const refusedCoins = getRefusedCoins(bank, acceptedCoins);

  if(refusedCoins.length > 0) {
    throw(`Some coins were refused: [${refusedCoins}].`);
  }

  if(utils.hasDuplicates(acceptedCoins)) {
    throw(`Accepted coins cannot have duplicates`);
  }
  
  this.acceptedCoins = acceptedCoins;
  this.bank = bank;
}

Machine.prototype.addCoin = function (coin) {
  if(!isCoinAccepted(coin, this.acceptedCoins)) {
    throw(`A coin of ${coin} value is not accepted`);
  }

  this.bank.push(coin);
}

Machine.prototype.removeCoin = function(coin) {
  var index = utils.find(coin, this.bank);
  
  if(index == -1) {
    throw(`No more coins ${coin} in the pool`);
  }

  this.bank.splice(index, 1);
}

Machine.prototype.hasCoin = function(coin) {
  return utils.find(coin, this.bank) != -1;
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