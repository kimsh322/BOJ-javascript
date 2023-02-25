const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let result = [];
for (let i = 1; i <= n; i++) {
  result.push(i);
}
for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  let rev = result.slice(a - 1, b);
  result.splice(a - 1, b - a + 1, ...rev.reverse());
}
console.log(result.join(" "));