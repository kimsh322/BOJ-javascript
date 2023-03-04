const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, k] = a.split(" ").map(Number);
let start = 0;
let arr = input.map(Number);
let end = Math.max(...arr);
let middle;
while (start <= end) {
  let num = 0;
  middle = Math.floor((start + end) / 2);
  for (let i = 0; i < n; i++) {
    num += Math.floor(+input[i] / middle);
  }
  if (num >= k) {
    start = middle + 1;
  } else {
    end = middle - 1;
  }
}
console.log(end);
