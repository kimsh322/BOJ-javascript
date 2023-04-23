const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const gcd = (a, b) => {
  if (a % b === 0) return b;
  return gcd(b, a % b);
};

let [a, b] = input[0].split(" ").map(Number);
let [c, d] = input[1].split(" ").map(Number);
let numerator = a * d + b * c;
let denominator = b * d;
let e = gcd(numerator, denominator);
console.log(numerator / e, denominator / e);