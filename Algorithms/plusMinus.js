function plusMinus(arr) {
  let elements = arr.length;
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  // Write your code here
  for (let i = 0; i < elements; i++) {
    if (arr[i] < 0) {
      negativeCount++;
    }
    if (arr[i] == 0) {
      zeroCount++;
    }
    if (arr[i] > 0) {
      positiveCount++;
    }
  }

  let positiveRatio = positiveCount / elements;
  let negativeRatio = negativeCount / elements;
  let zeroRatio = zeroCount / elements;

  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
  //   console.log("positive", positiveCount);
  //   console.log("negative", negativeCount);
  //   console.log("zero", zeroCount);
}
console.log(plusMinus([1, 1, 0, -1, -1]));
