const [a,input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const arr = input.split(' ').map(Number);
arr.unshift(0);
const dp = Array(+a+1).fill(0);
dp[1] = arr[1];
for(let i=2; i<=a; i++){
  dp[i] = arr[i];
  for(let j=1;j<i;j++){
    dp[i] = Math.max(dp[i],dp[j]+dp[i-j]);
  }
}
console.log(dp[dp.length-1]);