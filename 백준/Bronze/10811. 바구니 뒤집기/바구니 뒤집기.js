const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let result = Array(n);
for (let i = 1; i <= n; i++) {
  result[i - 1] = i;
}
for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  let rev = result.slice(a - 1, b);
  result = [...result.slice(0, a - 1), ...rev.reverse(), ...result.slice(b)];
}
console.log(result.join(" "));