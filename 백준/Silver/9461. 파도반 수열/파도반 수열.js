const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let dp = [0, 1, 1, 1, 2];
let result = "";
const func = (num) => {
  if (dp[num] !== undefined) return dp[num];
  dp[num] = func(num - 1) + func(num - 5);
  return dp[num];
};

for (let i = 0; i < +n; i++) {
  result += func(+input[i]) + "\n";
}
console.log(result);