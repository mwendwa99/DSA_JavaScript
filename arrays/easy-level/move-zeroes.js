//https://leetcode.com/problems/move-zeroes/

//Input: nums = [0,1,0,3,12]
//Output: [1,3,12,0,0]

var moveZeroes = function(nums) {
    let left = 0; // Pointer for non-zero elements
    let right = 0; // Pointer for the current element
    
    while (right < nums.length) {
        if (nums[right] !== 0) {
        //[nums[left], nums[right]] 
        //nums[left]: This element represents the value at the left index of the nums array.
        //nums[right]: This element represents the value at the right index of the nums array.
            // Swap the non-zero element with the left pointer
            [nums[left], nums[right]] = [nums[right], nums[left]];
        //= [nums[right], nums[left]];
        //nums[left] receives the value that was originally nums[right].
        //nums[right] receives the value that was originally nums[left].
            left++; // Move the left pointer to the next position
        }
        right++; // Move the right pointer to the next position
    }
};
// time complexity - O(n)

//Method 2
let moveZeroes = function(nums) { //a function called moveZeroes that takes an array nums as its input.
    for(let i= nums.length-1; i>=0; i--){ //This line initializes a for loop that iterates through the nums array in reverse order
        if(nums[i]===0){
                         // push adds to the end of array
            nums.push(0) //If the current element is 0, this line adds another 0 to the end of the nums array.
                         //This effectively moves one 0 from its current position to the end of the array.
            nums.splice(i,1)
        //This line removes the 0 at the current position (index i) from the array using the splice method with a length of 1
        //changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
        }
    }
    return nums
};

//time complexity O(n^2)