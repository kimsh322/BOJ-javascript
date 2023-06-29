let [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;
const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input[i].split(" ").map(Number));
}
const dp = Array(n)
  .fill(0)
  .map(() =>
    Array(n)
      .fill(0)
      .map(() => [0, 0, 0])
  );
for (let i = 1; i < n; i++) {
  if (arr[0][i] === 1) break;
  dp[0][i][0] = 1;
}
for (let i = 1; i < n; i++) {
  for (let j = 1; j < n; j++) {
    if (arr[i][j] === 0 && arr[i - 1][j] === 0 && arr[i][j - 1] === 0) {
      dp[i][j][2] = dp[i - 1][j - 1][0] + dp[i - 1][j - 1][1] + dp[i - 1][j - 1][2];
    }
    if (arr[i][j] === 0) {
      dp[i][j][0] = dp[i][j - 1][0] + dp[i][j - 1][2];
      dp[i][j][1] = dp[i - 1][j][1] + dp[i - 1][j][2];
    }
  }
}

console.log(dp[n - 1][n - 1].reduce((a, el) => a + el, 0));