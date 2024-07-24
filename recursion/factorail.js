// comlexity O(n)
// given an integer n find the factorial
// n = n * (n - 1)
function recursiveFactorial(n) {
  // base case
  if (n === 0) {
    return 1;
  }
  // solution
  return n * recursiveFactorial(n - 1);
}
