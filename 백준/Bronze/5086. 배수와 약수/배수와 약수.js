const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");
let i = 0;
while (true) {
  const [a, b] = input[i].split(" ").map(Number);
  if (a === 0 && b === 0) break;
  if (b % a === 0) console.log("factor");
  else if (a % b === 0) console.log("multiple");
  else console.log("neither");
  i++;
}