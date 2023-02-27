const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let arr = [];
for (let i = 0; i < +n; i++) {
  arr.push(input[i].split(" "));
}
arr.sort((a, b) => +a[0] - +b[0]);
let result = "";
for (let el of arr) {
  result += `${el[0]} ${el[1]}\n`;
}
console.log(result);