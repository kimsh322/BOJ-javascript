const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let arr = input[3].split(" ");
let obj = {};
for (let el of arr) {
  obj[el] = 0;
}
let arr2 = input[1].split(" ");
for (let el of arr2) {
  if (el in obj) obj[el]++;
}
let result = "";
for (let el of arr) {
  result += obj[el] + " ";
}
console.log(result);