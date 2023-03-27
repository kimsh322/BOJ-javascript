const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let arr = [];
for (let i = 0; i < n; i++) arr.push(input[i].split(" ").map(Number));
arr.sort((a, b) => a[0] - b[0]);
arr.sort((a, b) => a[1] - b[1]);

let end = arr[0][1];
let num = 1;
for (let i = 1; i < arr.length; i++) {
  if (arr[i][0] >= end) {
    num++;
    end = arr[i][1];
  }
}
console.log(num);