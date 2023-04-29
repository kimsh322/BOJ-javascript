const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, k] = a.split(" ").map(Number);
let arr = [[0, 0]];
for (let i = 0; i < n; i++) arr.push(input[i].split(" ").map(Number));
let dp = Array(n + 1)
  .fill(0)
  .map(() => Array(k + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= k; j++) {
    if (j - arr[i][0] >= 0) dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - arr[i][0]] + arr[i][1]);
    else dp[i][j] = dp[i - 1][j];
  }
}

console.log(dp[n][k]);