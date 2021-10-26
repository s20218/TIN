function palindrome(str) {
    var regex = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(regex, '');

    for (var i = 0; i < str.length/2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
          return false;
      }
    }
    return true;
}

function printString(isPalindrome, string){
    isPalindrome ? console.log(string + " is a palindrome.") : console.log(string + " is not a palindrome.");
}

let string = "eye";

printString(palindrome(string), string);