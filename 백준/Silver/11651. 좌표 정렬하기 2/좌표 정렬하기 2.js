const [num, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let arr = [];
for (let i = 0; i < +num; i++) {
  arr.push(input[i].split(" ").map(Number));
}
arr.sort((a, b) => a[0] - b[0]);
arr.sort((a, b) => a[1] - b[1]);
let result = arr.reduce((a, el) => a + el[0] + " " + el[1] + "\n", "");
console.log(result);