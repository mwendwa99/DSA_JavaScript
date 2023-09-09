//https://leetcode.com/problems/majority-element/
//nums = [2,2,1,1,1,2,2]
// sorted = [1,1,1,2,2,2,2]
// n = sorted.length
// mid = 3
//but sorted[mid] = the most repeated
var majorityElement = function(nums) {
    let sorted = nums.sort((a,b)=>a-b) // Ascending order sort
    return sorted[Math.floor(sorted.length/2)]
    };

// OR
var majorityElement = function(nums) {
    let sorted = nums.sort((a,b)=>b-a) // descending order sort
    return sorted[Math.floor(sorted.length/2)]
    };