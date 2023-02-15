const a = require('fs').readFileSync('/dev/stdin').toString().split("\n");
for (let i = 1; i <= +a[0] * 2; i += 2) {
  let [k, n] = [+a[i], +a[i + 1]];
  function sol(x, y) {
    if (x === 0) return y;
    if (y === 1) return 1;
    return sol(x - 1, y) + sol(x, y - 1);
  }
  console.log(sol(k, n));
}