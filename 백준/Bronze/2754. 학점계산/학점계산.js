const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let sum = 0;
switch (input[0]) {
  case "A":
    sum = 4;
    break;
  case "B":
    sum = 3;
    break;
  case "C":
    sum = 2;
    break;
  case "D":
    sum = 1;
    break;
  default:
    sum = 0;
}
if (input[1] === "+") sum += 0.3;
if (input[1] === "-") sum -= 0.3;
console.log(sum.toFixed(1));