const [a, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);
const arr = input.split(" ").map(Number);
const modArr = Array(m).fill(0);
let sum = 0;

for (let i = 0; i < n; i++) {
  let cur = arr[i] % m;
  sum = (sum + cur) % m;
  modArr[sum] += 1;
}
let count = modArr[0];

for (let i = 0; i < m; i++) {
  count += (modArr[i] * (modArr[i] - 1)) / 2;
}

console.log(count);
