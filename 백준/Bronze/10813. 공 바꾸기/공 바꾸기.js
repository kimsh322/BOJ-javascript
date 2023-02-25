const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const result = Array(n);
for (let i = 1; i <= n; i++) {
  result[i - 1] = i;
}
for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  [result[a - 1], result[b - 1]] = [result[b - 1], result[a - 1]];
}
console.log(result.join(" "));