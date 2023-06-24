const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input[i].split(" ").map(Number));
}
const dp = [[arr[0][0]]];
for (let i = 1; i < n; i++) {
  const leng = arr[i].length;
  const curArr = Array(leng).fill(0);
  curArr[0] = dp[i - 1][0] + arr[i][0];
  curArr[leng - 1] = dp[i - 1][dp[i - 1].length - 1] + arr[i][leng - 1];
  for (let j = 1; j < leng - 1; j++) {
    curArr[j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + arr[i][j];
  }
  dp.push(curArr);
}
console.log(Math.max(...dp[n - 1]));