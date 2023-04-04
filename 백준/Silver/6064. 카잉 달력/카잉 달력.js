const [t, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const gcd = (a, b) => {
  if (a % b === 0) return b;
  return gcd(b, a % b);
};
let result = '';
for (let i = 0; i < t; i++) {
  let [m, n, x, y] = input[i].split(" ").map(Number);
  let num = x;
  let curY = x;
  let lcm = (n * m) / gcd(n, m);
  while (num <= lcm) {
    let curYY = curY % n === 0 ? n : curY % n;
    if (curYY === y) break;
    curY = curYY + m;
    num += m;
  }
  if (num > lcm) result += -1 + "\n";
  else result += num + "\n";
}
console.log(result);