function factorialIterative(n){
    let factorial = 1;
    
    for(var i = n; i >= 1; i--){
        factorial = factorial*i;
    }
    return factorial;
}

var factorialRecursive = function(n){  
    if(n === 0 || n === 1){
       return 1;
    }else{
        return n * factorialRecursive(n-1);
    }
}

let n = 1;
let factorialRec = factorialRecursive(n);
let factorialIter = factorialIterative(n);

console.log("Factorial of " + n + ": " + " iterative = " + factorialIter + ", recursive = " + factorialRec);
