let [n, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;
const arr = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = arr.length - 1;
let sum = Number.MAX_SAFE_INTEGER;
let idx = [];
while (left < right) {
  const curSum = arr[left] + arr[right];
  if (Math.abs(sum) > Math.abs(curSum)) {
    sum = curSum;
    idx = [left, right];
  }
  if (curSum === 0) break;
  if (curSum > 0) right--;
  else if (curSum < 0) left++;
}
console.log(`${arr[idx[0]]} ${arr[idx[1]]}`);