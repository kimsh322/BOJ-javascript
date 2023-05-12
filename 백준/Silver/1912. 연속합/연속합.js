const [n,input] = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.split(' ').map(Number);
let dp = [arr[0]];
for(let i=1; i<n; i++){
  dp.push(Math.max(dp[i-1]+arr[i],arr[i]));
}
console.log(Math.max(...dp));