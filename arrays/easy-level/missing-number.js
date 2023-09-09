//https://leetcode.com/problems/missing-number/

var missingNumber = function(nums) {
 
    // sum =n/2 *(n+1) where n is the array length
    let n = nums.length
    let expectedSum = n/2 * (n + 1)
    let actualSum = 0
    for (let num of nums)(
      actualSum += num
    )
  
    // actualSum = nums.reduce((acc,curr) => acc +curr) //for better time complexity
  return expectedSum - actualSum;
  };