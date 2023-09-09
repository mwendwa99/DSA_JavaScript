// https://leetcode.com/problems/merge-sorted-array/
//let first = m - 1; and let last = n - 1;: These lines initialize two pointers,
//The for loop iterates from the end of the nums1 array (index nums1.length - 1) to the beginning (index 0).
// This loop is used to merge the two arrays, working from the end to the beginning to avoid overwriting elements prematurely.
//Inside the loop:
//if (first >= 0 && nums1[first] >= nums2[last]): This condition checks if the element at the first pointer in nums1 is greater than or equal to the element at the last pointer in nums2.
// If this condition is true, it means that the next element to be placed in the merged array should come from nums1.
// nums1[i] = nums1[first];: It assigns the element at the first pointer in nums1 to the current position i in nums1.
// first--;: It decrements the first pointer to move to the previous element in nums1.
// else if (last >= 0): If the condition in the if statement is not met (i.e., the element in nums2 is greater), this else if block is executed.
// nums1[i] = nums2[last];: It assigns the element at the last pointer in nums2 to the current position i in nums1.
// last--;: It decrements the last pointer to move to the previous element in nums2.
//else if (last >= 0): If the condition in the if statement is not met (i.e., the element in nums2 is greater), this else if block is executed.
// nums1[i] = nums2[last];: It assigns the element at the last pointer in nums2 to the current position i in nums1.
// last--;: It decrements the last pointer to move to the previous element in nums2.
// This process continues until all elements from both nums1 and nums2 have been merged into nums1.
var merge = function (nums1, m, nums2, n) { 
    let first = m - 1;
    let last = n - 1;

    for (let i = nums1.length - 1; i >= 0; i--) {
      if (first >= 0 && nums1[first] >= nums2[last]) {
  
        nums1[i] = nums1[first];
        first--;
  
      } else if (last >= 0) {
  
        nums1[i] = nums2[last];
        last--;
  
      }
    }
  };

  // time complexity, O(m + n) = O(n)

//method2
var merge = function (nums1, m, nums2, n) {
    //Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    //Output: [1,2,2,3,5,6]
   const index = nums1.length - n;
    for(let i=index;i < nums1.length;i++) {
        nums1[i] = nums2[i-index];
    }
    nums1.sort((a,b)=> a-b);
  return nums1

};
// time complexity O(1), constant time

//method3

  //why is this code not passing all the tests during submission?
  var merge = function (nums1, m, nums2, n) {
    //Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    //Output: [1,2,2,3,5,6]
    let mergeArray = [...nums1,...nums2]
    let sorted = mergeArray.sort((a, b) => a-b)
    let k =0;
    for(let i = 0; i<sorted.length; i++){
        if(sorted[i] !== 0) {
            nums1[k++] = sorted[i]
        }
    }
  return nums1

};