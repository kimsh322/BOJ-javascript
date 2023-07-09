const [aaa, bbb, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m, r] = aaa.split(" ").map(Number);
const itemNum = bbb.split(" ").map(Number);
itemNum.unshift(0);
// 인접행렬
const arr = Array(n + 1)
  .fill(0)
  .map(() => Array(n + 1).fill(Number.MAX_SAFE_INTEGER));

for (let i = 0; i < r; i++) {
  const [a, b, l] = input[i].split(" ").map(Number);
  arr[a][b] = l;
  arr[b][a] = l;
}
for (let i = 1; i <= n; i++) arr[i][i] = 0;

// 플로이드
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    for (let k = 1; k <= n; k++) {
      arr[j][k] = Math.min(arr[j][k], arr[j][i] + arr[i][k]);
    }
  }
}

let result = 0;
// 범위 내 개수 세기
for (let i = 1; i <= n; i++) {
  const total = arr[i].reduce((sum, dist, idx) => {
    if (dist <= m) return sum + itemNum[idx];
    else return sum;
  }, 0);
  result = Math.max(result, total);
}
console.log(result);