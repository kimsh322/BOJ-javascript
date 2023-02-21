const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let max = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum > m) continue;
      if (sum > max) max = sum;
    }
  }
}
console.log(max);