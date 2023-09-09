//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums) {
    // nums = [0,0,1,1,1,2,2,3,3,4]
    // nums = [0,1,2,3,4,_,_,_,_,_]]
    // nums.length = k = 5

    let unique = new Set(nums)
    let arr = [...unique]
    for (let i = 0; i < arr.length; i++){
        nums[i] = arr[i]
    }
    return arr.length
};

//OR

var removeDuplicates = function(nums) {
    // nums = [0,0,1,1,1,2,2,3,3,4]
    // nums = [0,1,2,3,4,_,_,_,_,_]]
    // nums.length = k = 5
    let unique = new Set(nums)
    let arr = [...unique]
    let k = 0;
    for (let i = 0; i < arr.length; i++){
        nums[k] = arr[i]
        k++
    }
    return k
};