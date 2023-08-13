let [n, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;
const arr = input.split(" ").map(Number);
const dp = [arr[0]];

const bi = (a) => {
  let left = 0;
  let right = dp.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (dp[middle] === a) return middle;
    if (dp[middle] < a) left = middle + 1;
    else right = middle - 1;
  }
  return left;
};

for (let i = 1; i < n; i++) {
  if (arr[i] > dp[dp.length - 1]) dp.push(arr[i]);
  else {
    let idx = bi(arr[i]);
    dp[idx] = arr[i];
  }
}

console.log(dp.length);