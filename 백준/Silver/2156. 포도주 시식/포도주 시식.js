const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const dp = Array(+n).fill(0);
dp[0] = +input[0];
dp[1] = dp[0] + +input[1];
dp[2] = Math.max(dp[1], dp[0] + +input[2], +input[1] + +input[2]);
for (let i = 3; i < n; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 2] + +input[i], dp[i - 3] + +input[i] + +input[i - 1]);
}

console.log(dp[n-1]);