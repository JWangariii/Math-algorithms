// recursion is when a function calls itself
// MUST have base case to terminate the recursion
// solving a problem :
// break down the problem
// find the base case

// complexity : O(2^n)
// given a number n, find the nth element of the f.sequence
// F^n = F^n - 1 + F^n - 2
// n determines the element position and starts at index o
function recursiveFibonacci(n) {
  // base case, returns 0 if n = 0 ans 1 if n = 1
  if (n < 2) {
    return n;
  }
  // getting the nth element
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));
