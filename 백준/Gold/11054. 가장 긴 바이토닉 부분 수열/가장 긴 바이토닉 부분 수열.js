let [n, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;
const arr = input.split(" ").map(Number);

const dp1 = Array(n).fill(1);
const dp2 = Array(n).fill(1);

// 증가
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp1[i] = Math.max(dp1[j] + 1, dp1[i]);
    }
  }
}

// 감소
const rev = [...arr].reverse();
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (rev[i] > rev[j]) {
      dp2[i] = Math.max(dp2[j] + 1, dp2[i]);
    }
  }
}
dp2.reverse();
let max = 0;
for (let i = 0; i < n; i++) {
  max = Math.max(max, dp1[i] + dp2[i] - 1);
}

console.log(max);