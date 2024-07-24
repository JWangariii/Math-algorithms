// number greater than 1 and not divisible by 2
// comlexity : O(n) ; as the value of n increases the number of times line of if executes increases

// given a number n determine if it's prime or not
function isPrime(n) {
  // check in number is greater than 1
  if (n < 2) {
    return false;
  }
  // if > 1, check if divisible by 2
  // i = 2 since every number is divisible by 1
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  // if not divisible by 2
  return true;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(9));

// complexity : O(sqrt(n))
// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % 2 === 0) {
//       return false;
//     }
//   }
//   return true;
// }
