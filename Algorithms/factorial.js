/*
Q: Given an integer 'n', find the factorial of that integer
Desc: a factorial of a +ve integer 'n' (denoted as n!) is the
product of all +ve integers less than or equal to 'n'

Factorial(0) = 1
Factorial(4) = 4*3*2*1=24
*/

function factorial(n) {
  let f = 1;
  //   start from i=2 since i=1 has no effect
  for (i = 2; i <= n; i++) {
    // at every iteration return the int * i
    f = f * i;
  }
  return f;
}

console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// Big-O = O(n) linear time complexity
// as (n) grows the more iterations executed at line 13
