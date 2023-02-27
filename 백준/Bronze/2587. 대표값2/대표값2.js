const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
input.sort((a, b) => a - b);
let avg = input.reduce((a, el) => a + el, 0) / 5;
console.log(avg);
console.log(input[2]);
