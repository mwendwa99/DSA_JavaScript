/*
Q: Given a natural number 'n' determine if n is prime number
Desc: a prime number is a natural number > 1 that is not a
product of two smaller natural numbers
eg: isPrime(5) = true
*/
function isPrime(n) {
  //   check if n is less than 2
  if (n < 2) {
    return false;
  }
  // loop to get smaller numbers
  for (let i = 2; i < n; i++) {
    // check if n is a product of two smaller numbers
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(35)); // true
console.log(isPrime(8)); // false
// Big-O = O(n) linear time complexity
// as (n) increases the number of times line 13
// executes increases

/* optimized primality test
// this states that 'n' is a prime number if its multiples a an b
// are less than the square root of 'n'
*/

function isOptimizedPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isOptimizedPrime(5));
console.log(isOptimizedPrime(8));

// Big-O = O(sqrt(n))
// as (n) increases the loop executes in the sqrt value
//  of n
