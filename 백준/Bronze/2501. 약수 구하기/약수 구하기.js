const input = require("fs").readFileSync('/dev/stdin').toString();
const [a, b] = input.split(" ").map(Number);
let num = 0;
let log = false;
for (let i = 1; i <= a; i++) {
  if (a % i === 0) {
    num++;
    if (num === b) {
      console.log(i);
      log = true;
    }
  }
}
if (!log) console.log(0);