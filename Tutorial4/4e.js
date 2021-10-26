function findLongestWord(string) {
    var longestWord = string.split(/[ ,.:;]/).sort(function(a, b) { return b.length - a.length; });
    return longestWord[0];
}

let string = "Find the longest word in this sentence."
console.log(findLongestWord(string));