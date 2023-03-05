const [n, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let arr = input.split(" ").map(Number);
let arr2 = [...arr];
arr2.sort((a, b) => a - b);
let num = 0;
let sorting = [0];
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] === arr2[i - 1]) sorting.push(num);
  else sorting.push(++num);
}

let map = new Map();
for (let i = 0; i < arr2.length; i++) {
  map.set(arr2[i], sorting[i]);
}

let result = "";
for (let el of arr) {
  result += map.get(el) + " ";
}
console.log(result);