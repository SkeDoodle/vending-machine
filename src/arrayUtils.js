/**
 * 
 * @param {number} coin 
 * @param {number[]} stack 
 */
var find = function(coin, stack) {
  return stack.findIndex(c => c == coin);
}

/**
 * 
 * @param {number[]} coins 
 */
var coinsToMoney = function(coins) {
  return coins.reduce((coin1, coin2) => coin1 + coin2, 0);
}

/**
 * @param {number[]} arr 
 */
var hasDuplicates = function(arr) {
  for (let index = 0; index < arr.length - 1; index++) {
    const element = arr[index];
    
    const arrSubset = arr.slice(index + 1, arr.length)
    const isDuplicate = arrSubset.some(subsetElement => subsetElement === element);

    if(isDuplicate) {
      return true;
    }
  }

  return false;
}

module.exports = {find: find, hasDuplicates: hasDuplicates, coinsToMoney: coinsToMoney};