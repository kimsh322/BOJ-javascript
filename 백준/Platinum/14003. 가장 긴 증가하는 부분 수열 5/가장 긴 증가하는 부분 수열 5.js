let [n, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;
const arr = input.split(" ").map(Number);
const dpEl = [arr[0]];
const dp = [[0, arr[0]]];

function bi(a) {
  left = 0;
  right = dpEl.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (dpEl[middle] === a) return middle;
    if (dpEl[middle] < a) left = middle + 1;
    else right = middle - 1;
  }
  return left;
}

for (let i = 1; i < n; i++) {
  if (arr[i] > dpEl[dpEl.length - 1]) {
    dpEl.push(arr[i]);
    dp.push([dpEl.length - 1, arr[i]]);
  } else {
    let idx = bi(arr[i]);
    dpEl[idx] = arr[i];
    dp.push([idx, arr[i]]);
  }
}

let maxDp = dp[0][0];
let idx = 0;
for (let i = 1; i < dp.length; i++) {
  if (maxDp < dp[i][0]) {
    maxDp = dp[i][0];
    idx = i;
  }
}

const result = [];
let resultDp = maxDp;

while (idx >= 0) {
  if (dp[idx][0] === resultDp) {
    result.push(arr[idx]);
    resultDp--;
  }
  idx--;
}

console.log(maxDp + 1);
console.log(result.reverse().join(" "));