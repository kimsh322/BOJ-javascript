let [t, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let i = 0;
let result = "";
while (t--) {
  const n = +input[i++];
  const arr = [];
  arr.push(input[i++].split(" ").map(Number));
  arr.push(input[i++].split(" ").map(Number));
  const dp = Array(2)
    .fill(0)
    .map(() => Array(n + 1).fill(0));
  dp[0][1] = arr[0][0];
  dp[1][1] = arr[1][0];
  for (let j = 2; j <= n; j++) {
    dp[0][j] = Math.max(dp[1][j - 1], dp[1][j - 2]) + arr[0][j - 1];
    dp[1][j] = Math.max(dp[0][j - 1], dp[0][j - 2]) + arr[1][j - 1];
  }
  result += Math.max(dp[0][n], dp[1][n]) + "\n";
}

console.log(result);