// factorial of a non negative integer n.
// denoted n! is the product of all +ve integers <= n
// complexity : O(n)

// given integer n,find factorial of the t integer
function factorial(n) {
  // check if number is > 1
  let result = 1;
  // if n > 1,get factorial
  // i = 2 since * by 1 has no effect
  for (let i = 2; i < n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
