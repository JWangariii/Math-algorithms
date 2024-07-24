// an integer is a power of 2 if there's an integer x such that n === 2^x
// it's dividing a number repeatedly by 2 to get 0 at each step
// if remainder isn't 0 at any step, n is not a power of 2
// if remainder is 0 and n becomes 1 it's a power of 2
// complexity : O(logn)

// given a +ve integer n, determine if the number is a power of 2 or not
function isPowerOfTwo(n) {
  // to check if n is a +ve integer
  if (n < 1) {
    return false;
  }
  // condition should run as long as n is > 1
  while (n > 1) {
    // check if n by 2 is not 0
    if (n % 2 !== 0) {
      return false;
    }
    // otherwise, if 0 repeat the loop
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

// bitwise
function isPowerOfTwoBitWise(n) {
  // if n is +ve
  if (n < 1) {
    return false;
  }
  // check if n^2
  return (n & (n - 1)) === 0;
}
