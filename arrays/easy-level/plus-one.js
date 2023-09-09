// https://leetcode.com/problems/plus-one/

var plusOne = function(digits) {
    //two cases; 999 and 989
    let n = digits.length
    for(let i = n - 1; i >= 0; i--){
        if(digits[i] === 9){
            digits[i] = 0;
        } else {
            digits[i]++
            return digits
        }
    } 
    digits.unshift(1) // array will have 1 as its first element, and all existing elements in the array will shift one position to the right.
    return digits
};