let [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;
const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

let result = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < 3; i++) {
  const dp = Array(n).fill(0).map(() => Array(3).fill(Number.MAX_SAFE_INTEGER));
  dp[0][i] = arr[0][i];
  for (let j = 1; j < n; j++) {
    dp[j][0] = Math.min(dp[j - 1][1], dp[j - 1][2]) + arr[j][0];
    dp[j][1] = Math.min(dp[j - 1][0], dp[j - 1][2]) + arr[j][1];
    dp[j][2] = Math.min(dp[j - 1][0], dp[j - 1][1]) + arr[j][2];
  }
  for (let j = 0; j < 3; j++) {
    if (j !== i) result = Math.min(result, dp[n - 1][j]);
  }
}

console.log(result);