const input = require("fs").readFileSync('/dev/stdin').toString().trim();
let arr = input.split("").map(Number);
arr.sort((a, b) => b - a);

console.log(arr.join(""));