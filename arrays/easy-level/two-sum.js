//https://leetcode.com/problems/two-sum/

// Naive approach, time complexity O(n**2)
function twoSum(nums, target) {
    for(let i = 0; i< nums.length; i++){
        for (j = i + 1; j < nums.length; j++){
            if ( nums[i] + nums[j] === target ){
                return [i, j]
            }
        }
    }
}

// More optimized O(n)- linear time
function twoSum(nums, target) {
    let result = {}
    //nums = [2,7,11,15], target = 9
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
        if(result[complement] !== undefined){
            return [result[complement], i]
        } 
        result[nums[i]] = i;
        
    }
return []
}