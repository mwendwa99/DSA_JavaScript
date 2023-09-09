//https://leetcode.com/problems/single-number/

var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++){
        result ^= nums[i] // exclusive OR
    }
    return result;
   }