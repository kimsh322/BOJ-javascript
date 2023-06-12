const [a, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, s] = a.split(" ").map(Number);
const arr = input.split(" ").map(Number);
let left = 0;
let right = 0;
let sum = arr[0];
let min = 1000001;
while (left < n) {
  if (left === right && sum >= s) {
    min = 1;
    break;
  } else if (sum >= s) {
    min = Math.min(min, right - left + 1);
    sum -= arr[left];
    left++;
  } else {
    if (right === n - 1) break;
    right++;
    sum += arr[right];
  }
}
if (min === 1000001) console.log(0);
else console.log(min);