const [n,...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let result = '';
let max = Math.max(...input.map(Number))
let dp = Array(max+1).fill(0).map(() => [0,0,0]);
dp[1] = [1,0,0];
dp[2] = [0,1,0];
dp[3] = [1,1,1];
for(let j=4; j<=max;j++){
  dp[j][0] = (dp[j-1][1]+dp[j-1][2]) % 1000000009;
  dp[j][1] = (dp[j-2][0]+dp[j-2][2]) % 1000000009;
  dp[j][2] = (dp[j-3][0]+dp[j-3][1]) % 1000000009;
}

for(let i=0; i<n; i++){
  let cur = +input[i]
  result += (dp[cur][0]+dp[cur][1]+dp[cur][2]) % 1000000009 +'\n';
}
console.log(result);