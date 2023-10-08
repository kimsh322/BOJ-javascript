const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [m, n] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i <= m; i++) arr.push(input[i].split(" ").map(Number));
const dp = Array(m)
  .fill(0)
  .map(() => Array(n).fill(-1));

const func = (y, x) => {
  if (y === m - 1 && x === n - 1) return 1;
  if (dp[y][x] !== -1) return dp[y][x];
  dp[y][x] = 0;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  for (let i = 0; i < 4; i++) {
    const curY = y + dy[i];
    const curX = x + dx[i];
    if (curY < 0 || curY >= m || curX < 0 || curX >= n) continue;
    if (arr[curY][curX] >= arr[y][x]) continue;
    dp[y][x] += func(curY, curX);
  }
  return dp[y][x];
};

func(0, 0);
console.log(dp[0][0]);