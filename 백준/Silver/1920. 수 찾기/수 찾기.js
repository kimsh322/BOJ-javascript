const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let set = new Set(input[1].split(" ").map(Number));
let arr = input[3].split(" ").map(Number);
let result = "";
for (let el of arr) {
  if (set.has(el)) result += 1 + "\n";
  else result += 0 + "\n";
}
console.log(result);