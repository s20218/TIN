function inOrder(string){
    var newString = string.split("").sort().join("");
    return newString;
}

let string = "pineapple";
console.log(inOrder(string));