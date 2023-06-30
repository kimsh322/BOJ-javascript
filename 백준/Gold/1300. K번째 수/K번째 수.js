const [n, k] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
let left = 1;
let right = k;
let mid,
  result = 0;
while (left <= right) {
  mid = Math.floor((left + right) / 2);
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += Math.min(Math.floor(mid / i), n);
  }
  if (count >= k) {
    result = mid;
    right = mid - 1;
  } else left = mid + 1;
}
console.log(result);
