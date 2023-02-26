const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const gradeScore = (str) => {
  let score = 0;
  switch (str[0]) {
    case "A":
      score = 4;
      break;
    case "B":
      score = 3;
      break;
    case "C":
      score = 2;
      break;
    case "D":
      score = 1;
      break;
    default:
      break;
  }
  if (str[1] === "+") score += 0.5;
  return score;
};

let total = 0;
let totalScore = 0;
for (let i = 0; i < 20; i++) {
  let [cName, score, grade] = input[i].split(" ");
  if (grade !== "P") {
    totalScore += +score;
    total += +score * gradeScore(grade);
  }
}
let result = (total / totalScore).toFixed(6);
console.log(result);