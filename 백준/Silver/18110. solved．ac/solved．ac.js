const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const exception = Math.round((+n * 15) / 100);
input.sort((a, b) => +a - +b);
let sum = 0;
for (let i = 0; i < n; i++) {
  if (i < exception || +n - exception <= i) continue;
  sum += +input[i];
}

console.log(+n === 0 ? 0 : Math.round(sum / (n - 2 * exception)));