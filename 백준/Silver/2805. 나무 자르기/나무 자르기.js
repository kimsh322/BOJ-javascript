const [a, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);
let arr = input.split(" ").map(Number);
let max = Math.max(...arr);
let min = 0;
let result = 0;
while (min <= max) {
  let middle = Math.floor((max + min) / 2);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.max(arr[i] - middle, 0);
  }
  if (sum >= m) {
    result = middle;
    min = middle + 1;
  } else max = middle - 1;
}
console.log(result);