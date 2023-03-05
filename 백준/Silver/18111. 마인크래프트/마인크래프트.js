const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, m, b] = a.split(" ").map(Number);
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(...input[i].split(" ").map(Number));
}
let total = arr.reduce((a, el) => a + el, b);
let maxHeight = Math.floor(total / arr.length);
let minHeight = Math.min(...arr);
let minTime = Number.MAX_SAFE_INTEGER;
let minCaseHeigth = 0;
for (let i = maxHeight; i >= minHeight; i--) {
  let min = 0;
  for (let el of arr) {
    let subtract = i - el;
    if (subtract > 0) min += subtract;
    else min += Math.abs(subtract) * 2;
  }
  if (minTime > min) {
    minTime = min;
    minCaseHeigth = i;
  }
}
console.log(minTime, minCaseHeigth);