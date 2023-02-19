const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map((el) => +el);
const gcd = (a, b) => {
  if (a % b === 0) return b;
  return gcd(b, a % b);
};
let result1 = gcd(input[0], input[1]);
let result2 = (input[0] * input[1]) / result1;
console.log(result1);
console.log(result2);