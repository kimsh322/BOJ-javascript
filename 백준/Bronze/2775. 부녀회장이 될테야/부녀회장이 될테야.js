const a = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const arr = [];
function sol(x, y) {
  if (x === 0) return y;
  if (y === 1) return 1;
  if (arr[x] === undefined) arr[x] = [];
  if (arr[x][y] === undefined) arr[x][y] = sol(x - 1, y) + sol(x, y - 1);
  return arr[x][y];
}
for (let i = 1; i <= +a[0] * 2; i += 2) {
  let [k, n] = [+a[i], +a[i + 1]];
  console.log(sol(k, n));
}