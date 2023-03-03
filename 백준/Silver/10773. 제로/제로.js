const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

let arr = [];
for (let i = 1; i <= input[0]; i++) {
  if (input[i] === 0) arr.pop();
  else arr.push(input[i]);
}
let sum = arr.reduce((a, el) => a + el, 0);
console.log(sum);