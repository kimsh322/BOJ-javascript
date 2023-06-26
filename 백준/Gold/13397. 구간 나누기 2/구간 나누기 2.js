const [a, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);
const arr = input.split(" ").map(Number);
let right = Math.max(...arr);
let left = 0;
let answer = 10001;
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let count = 1;
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < n; i++) {
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];
    if (max - min > mid) {
      count++;
      min = arr[i];
      max = arr[i];
    }
  }

  if (count <= m) {
    answer = Math.min(answer, mid);
    right = mid - 1;
  } else left = mid + 1;
}

console.log(answer);