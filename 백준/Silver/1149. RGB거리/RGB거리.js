const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let dp = [[...input[0].split(' ').map(Number)]];
for(let i=1; i<n; i++){
  let [r,g,b] = input[i].split(' ').map(Number);
  dp[i] = [0,0,0];
  dp[i][0] = Math.min(dp[i-1][1],dp[i-1][2])+r;
  dp[i][1] = Math.min(dp[i-1][0],dp[i-1][2])+g;
  dp[i][2] = Math.min(dp[i-1][0],dp[i-1][1])+b;
}

console.log(Math.min(...dp[n-1]));