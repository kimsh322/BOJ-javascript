const [t, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
const maxInput = Math.max(...input);
const prime = Array(maxInput + 1).fill(false);
prime[2] = true;
for (let i = 3; i <= maxInput; i += 2) {
  let bool = true;
  for (let j = 3; j <= Math.sqrt(i); j += 2) {
    if (i % j === 0) {
      bool = false;
      break;
    }
  }
  if (bool) prime[i] = true;
}
let result = "";
for (let i = 0; i < t; i++) {
  let cur = input[i];
  let num = 0;
  if (prime[2] && prime[cur - 2]) num++;
  for (let j = 3; j <= cur / 2; j += 2) {
    if (prime[j] && prime[cur - j]) num++;
  }
  result += num + "\n";
}
console.log(result);