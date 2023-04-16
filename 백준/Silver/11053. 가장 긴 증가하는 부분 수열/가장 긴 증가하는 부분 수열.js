const [n, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let arr = input.split(" ").map(Number);
let dp = Array(+n).fill(1);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
}
console.log(Math.max(...dp));