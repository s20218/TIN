function binarySearch(array, key){
    array.sort(function(a, b){return a - b});
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (array[middle] === key) {
            return middle;
        } else if (array[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

function print(index, array){
    index != -1 ? console.log("Number was found in the array.") 
                 : console.log("Number wasn't found in the array.");
}

let array = [5, 3, 7, 120, 2, 3, 2, 120];
let key = 7;

print(binarySearch(array, key));