const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
let isSorted;
for (let i = 0; i < input.length - 1; i++) {
  isSorted = true;
  for (let j = 0; j < input.length - 1 - i; j++) {
    if (input[j] > input[j + 1]) {
      [input[j], input[j + 1]] = [input[j + 1], input[j]];
      isSorted = false;
    }
  }
  if (isSorted) break;
}
console.log(input.join("\n"));