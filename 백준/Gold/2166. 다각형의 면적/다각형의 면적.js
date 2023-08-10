const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const arr = [];
for (let i = 0; i < n; i++) arr.push(input[i].split(" ").map(Number));

let result = 0;
for (let i = 0; i < n - 1; i++) {
  result += arr[i][0] * arr[i + 1][1] - arr[i][1] * arr[i + 1][0];
}
result += arr[n - 1][0] * arr[0][1] - arr[n - 1][1] * arr[0][0];
result = Math.abs(result) / 2;
console.log(result.toFixed(1));