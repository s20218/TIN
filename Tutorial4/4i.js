function countCoins(amount, coins){
    let result = [];

    for(var i = 0; i < coins.length; i++){
        let numOfOccurs = Math.floor(amount/coins[i]);
        amount -= coins[i] * numOfOccurs;
        
        for(var j = 0; j < numOfOccurs; j++){
            result.push(coins[i]);
        }
    }

    return result;
}

console.log(countCoins(46, [25, 10, 5, 2, 1]));