/*
Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable, method, and class names.

Input Format

Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
The operation will either be S (split) or C (combine)
M indicates method, C indicates class, and V indicates variable
In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.
Output Format

For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).

*/
function processData(input) {
  let splitMethod = "";
  let splitClass = "";
  let splitVariable = "";
  let combineMethod = "";
  let combineClass = "";
  let combineVariable = "";

  for (let i = 0; i < input.length; i++) {
    if (input[0] === "S" && input[2] === "M") {
      splitMethod = input
        .replace(/(?=[A-Z])/g, " ")
        .toLowerCase()
        .replace(/[sm;()]/g, "");
    } else if (input[0] === "C" && input[2] === "V") {
      combineVariable = input.replace(/[CV;]/g, "").replace(/?=[ ]/g);
    }
  }
  return splitMethod, combineVariable;
}

console.log(processData("S;M;plasticCup()"));
console.log(processData("C;V;mobile phone"));


// two sum algorithm
function twoSum(nums, target) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      result.push(map.get(complement), i);
    }
    map.set(nums[i], i);
  }
  return result;
}
