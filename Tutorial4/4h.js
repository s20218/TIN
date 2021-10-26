function getSecondMinMax(array){
    array.sort(function(a, b){return a - b});
    let set = [...new Set(array)];

    return [set[1], set[set.length - 2]];
}

let array = [5, 3, 7, 120, 2, 3, 2, 120];
console.log(getSecondMinMax(array));