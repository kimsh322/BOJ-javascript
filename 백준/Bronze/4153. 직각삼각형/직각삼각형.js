const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let i = 0;
while (true) {
  let [a, b, c] = input[i].split(" ").map((el) => el * el);
  if (a === 0 && b === 0 && c === 0) break;
  if (a + b === c || b + c === a || a + c === b) console.log("right");
  else console.log("wrong");
  i++;
}