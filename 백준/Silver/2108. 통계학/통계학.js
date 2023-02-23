const [num, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
let sum = input.reduce((a, el) => a + el, 0);
let sumLog = "" + Math.round(sum / num);
console.log(sumLog);

input.sort((a, b) => a - b);
console.log(input[(num - 1) / 2]);

let obj = {};
for (let el of input) {
  if (el in obj) obj[el]++;
  else obj[el] = 1;
}

let max = -1;
for (let key in obj) {
  if (obj[key] > max) max = obj[key];
}
let arr = [];
for (let key in obj) {
  if (obj[key] === max) arr.push(key);
}

let result = arr.map(Number).sort((a, b) => a - b);
console.log(result.length>1 ? result[1] : result[0]);

console.log(input[input.length - 1] - input[0]);