function fibonacci(index) {
    return index < 2 ? index : fibonacci(index - 1) + fibonacci(index - 2);
}

let index = 5;
console.log("Fibonacci number at index " + index + " is " + fibonacci(index));