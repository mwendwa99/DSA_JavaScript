

var missingNumber = function(nums) {
  // n =10
  // n= 100
  // n=1012

  // sum =n/2 *(n+1)
  let n = nums.length
  let expectedSum = n/2 * (n + 1)
  let actualSum = 0
  for (let num of nums)(
    actualSum += num
  )

  // actualSum = nums.reduce((acc,curr) => acc +curr) //for better time complexity
return expectedSum - actualSum;
};