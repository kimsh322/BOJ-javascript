const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let arr1 = [];
let arr2 = [];
for (let i = 0; i < 3; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  arr1.push(a);
  arr2.push(b);
}
let a = 0;
let b = 0;
for (let i = 0; i < 3; i++) {
  if (arr1.indexOf(arr1[i]) === arr1.lastIndexOf(arr1[i])) a = arr1[i];

  if (arr2.indexOf(arr2[i]) === arr2.lastIndexOf(arr2[i])) b = arr2[i];
}
console.log(a, b);
