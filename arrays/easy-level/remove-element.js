//https://leetcode.com/problems/remove-element/

function removeElement(nums, val) {
    let k = 0
    for(i = 0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i]
            k++;
        }
    }
return k
}

//OR

function removeElement(nums, val) {
    let k = 0
    for(i = 0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[k++] = nums[i]
        }
    }
return k
}