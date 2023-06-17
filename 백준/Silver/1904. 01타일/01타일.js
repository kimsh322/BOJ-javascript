const n = +require("fs").readFileSync('/dev/stdin').toString().trim();
let dp = [1, 1];
for (let i = 2; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}
console.log(dp[n]);