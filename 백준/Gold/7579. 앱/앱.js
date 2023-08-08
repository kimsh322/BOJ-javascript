const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const using = input[1].split(" ").map(Number);
const cost = input[2].split(" ").map(Number);
const costSum = cost.reduce((a, el) => a + el, 0);
const dp = Array(n + 1)
  .fill(0)
  .map(() => Array(costSum + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= costSum; j++) {
    if (cost[i - 1] > j) dp[i][j] = dp[i - 1][j];
    else dp[i][j] = Math.max(using[i - 1] + dp[i - 1][j - cost[i - 1]], dp[i - 1][j]);
  }
}
let result = costSum;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= costSum; j++) {
    if (dp[i][j] >= m) result = Math.min(result, j);
  }
}
console.log(result);