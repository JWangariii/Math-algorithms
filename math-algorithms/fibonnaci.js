// a sequence in which each number is the sum of the 2 preceding ones
// first 2 numbers are 0, 1
// complexity : O(n)

// given a number n, find the first n elements of the fibonacci sequence
function fibonacci(n) {
  // the first 2 numbers in the array
  const fib = [0, 1];
  // populating the other elements from the 3rd number, making sure
  // every number is the sum of the previous 2
  // i = 2 since we're starting from the 2nd index
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
