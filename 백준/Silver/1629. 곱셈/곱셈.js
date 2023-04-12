const input = require("fs").readFileSync('/dev/stdin').toString().trim();
let [a, b, c] = input.split(" ").map(Number);
a = BigInt(a);
c = BigInt(c);
const func = (num) => {
  if (num === 0) return 1;
  if (num === 1) return a % c;
  let half = func(Math.floor(num / 2));
  if (num % 2 === 0) return (half * half) % c;
  return (half * half * (a % c)) % c;
};

console.log(func(b).toString());