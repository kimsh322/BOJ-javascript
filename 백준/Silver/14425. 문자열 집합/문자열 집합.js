const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);
let obj = {};
for (let i = 0; i < n; i++) obj[input[i]] = 1;
let result = 0;
for (let i = n; i < n + m; i++) {
  if (input[i] in obj) result++;
}
console.log(result);