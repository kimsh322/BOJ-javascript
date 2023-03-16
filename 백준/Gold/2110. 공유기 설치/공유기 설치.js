const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, c] = a.split(" ").map(Number);
let arr = input.map(Number).sort((a, b) => a - b);
let min = 1;
let max = arr[arr.length - 1];
let num = 1;
let middle;
while (min <= max) {
  middle = Math.floor((min + max) / 2);
  num = 1;
  let cur = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (cur + middle <= arr[i]) {
      num++;
      cur = arr[i];
    }
  }
  if (num < c) max = middle - 1;
  if (num >= c) min = middle + 1;
}
console.log(min - 1);