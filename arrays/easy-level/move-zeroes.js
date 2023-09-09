//https://leetcode.com/problems/move-zeroes/


var moveZeroes = function(nums) {
    let left = 0; // Pointer for non-zero elements
    let right = 0; // Pointer for the current element
    
    while (right < nums.length) {
        if (nums[right] !== 0) {
            // Swap the non-zero element with the left pointer
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++; // Move the left pointer to the next position
        }
        right++; // Move the right pointer to the next position
    }
};