// function that counts the number of times a record is broken
function minMaxCount(scores) {
  //   an array to track minScore and maxScore
  let minScore = scores[0];
  let maxScore = scores[0];

  // variable to track no. of times record is broken
  let minRecordBreak = 0;
  let maxRecordBreak = 0;

  // loop through scores to update trackers
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < minScore) {
      minScore = scores[i];
      minRecordBreak++;
    }
    if (scores[1] > maxScore) {
      maxScore = scores[1];
      maxRecordBreak++;
    }
  }

  console.log("minMaxScore", [maxRecordBreak, minRecordBreak]);
}

console.log(minMaxCount([10, 5, 20, 20, 4, 5, 2, 25, 1]));
