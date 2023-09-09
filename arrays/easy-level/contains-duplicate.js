//https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
    let unique = new Set()
    for(let i = 0; i < nums.length; i++){
        if(unique.has(nums[i])){ //checks the element in unique object & returns true
            return true
        } else {
            unique.add(nums[i]) // if no element in unique object, add it
        }
    }
return false //return false if conditions in for loop are not met
};