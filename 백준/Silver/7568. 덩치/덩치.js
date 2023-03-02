const [num, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let arr = [];
for (let i = 0; i < +num; i++) {
  arr.push(input[i].split(" ").map(Number));
}
let result = "";
for (let el of arr) {
  let num = 1;
  for (let el2 of arr) {
    if (el === el2) continue;
    if (el2[0] > el[0] && el2[1] > el[1]) num++;
  }
  result += num + " ";
}
console.log(result);