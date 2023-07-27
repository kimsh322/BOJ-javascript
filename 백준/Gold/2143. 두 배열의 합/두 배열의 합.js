const [t, n, aa, m, bb] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const a = aa.split(" ").map(Number);
const b = bb.split(" ").map(Number);
const aSum = [];
const bSum = [];

for (let i = 0; i < n; i++) {
  let curSum = 0;
  for (let j = i; j < n; j++) {
    curSum += a[j];
    aSum.push(curSum);
  }
}

for (let i = 0; i < m; i++) {
  let curSum = 0;
  for (let j = i; j < m; j++) {
    curSum += b[j];
    bSum.push(curSum);
  }
}

aSum.sort((a, b) => a - b);
bSum.sort((a, b) => a - b);

let left = 0;
let right = bSum.length - 1;
let count = 0;

while (left < aSum.length && right >= 0) {
  let curA = aSum[left];
  let curB = bSum[right];
  let curSum = curA + curB;
  if (curSum === +t) {
    let sameA = 0;
    let sameB = 0;
    while (left < aSum.length && curA === aSum[left]) {
      left++;
      sameA++;
    }
    while (right >= 0 && curB === bSum[right]) {
      right--;
      sameB++;
    }
    count += sameA * sameB;
  }
  if (curSum > t) right--;
  if (curSum < t) left++;
}

console.log(count);