const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const arr = [];
for (let i = 0; i < n; i++) arr.push(input[i].split(" ").map(Number));

arr.sort((a, b) => a[0] - b[0]);

const dp = Array(+n).fill(1);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i][1] > arr[j][1]) {
      dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
}
console.log(n - Math.max(...dp));