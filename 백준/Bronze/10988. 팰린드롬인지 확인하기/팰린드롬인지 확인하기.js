const input = require("fs").readFileSync('/dev/stdin').toString().trim();
let a = Math.round((input.length - 1) / 2) - 1;
let result = 1;
for (let i = 0; i <= a; i++) {
  if (input[i] !== input[input.length - 1 - i]) {
    result = 0;
    break;
  }
}
console.log(result);