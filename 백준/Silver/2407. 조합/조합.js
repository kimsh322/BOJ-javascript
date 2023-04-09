const input = require("fs").readFileSync('/dev/stdin').toString().trim();
let [n, m] = input.split(" ").map(Number);
let r = n - m;
let a, b;

if (m >= r) {
  a = m;
  b = r;
} else {
  a = r;
  b = m;
}

let numerator = 1n;
for (let i = a + 1; i <= n; i++) numerator *= BigInt(i);
let denominator = 1n;
for (let i = 1; i <= b; i++) denominator *= BigInt(i);

console.log(String(numerator / denominator));