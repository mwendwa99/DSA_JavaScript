function miniMaxSum(arr) {
  // Write your code here
  let maxSum = 0;
  let minSum = 0;

  // sort the array
  let sortedArray = arr.sort((a, b) => a - b);

  // maxSum -> loop arr and add all except arr[0]
  for (let i = 1; i < sortedArray.length; i++) {
    maxSum = maxSum + sortedArray[i];
  }
  // minSum -> loop arr and add all except arr[n]
  for (let i = 0; i < sortedArray.length - 1; i++) {
    minSum = minSum + sortedArray[i];
  }
  console.log("minSum", minSum);
  console.log("maxSum", maxSum);
}

console.log(miniMaxSum([1, 2, 3, 4, 5])); // 10 14
