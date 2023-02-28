const input = require("fs").readFileSync('/dev/stdin').toString().trim().split(" ");
let [n, k] = input.map(Number);
let a = 1;
for (let i = n - k + 1; i <= n; i++) a *= i;

let b = 1;
for (let i = 2; i <= k; i++) b *= i;

console.log(a / b);