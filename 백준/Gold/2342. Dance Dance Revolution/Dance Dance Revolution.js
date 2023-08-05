const input = require("fs").readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
const n = input.length;
let i = 0;
const dp = Array(n)
  .fill(0)
  .map(() =>
    Array(5)
      .fill(0)
      .map(() => Array(5).fill(Number.MAX_SAFE_INTEGER))
  );
dp[0][0][0] = 0;
const power = (a, b) => {
  if (a === b) return 1;
  if (a === 0) return 2;
  if ((a === 1 && b === 3) || (b === 1 && a === 3)) return 4;
  if ((a === 2 && b === 4) || (b === 2 && a === 4)) return 4;
  return 3;
};

while (true) {
  const cur = input[i++];
  if (cur === 0) break;
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      dp[i][x][cur] = Math.min(dp[i][x][cur], dp[i - 1][x][y] + power(y, cur));
      dp[i][cur][y] = Math.min(dp[i][cur][y], dp[i - 1][x][y] + power(x, cur));
    }
  }
}

let result = Number.MAX_SAFE_INTEGER;
for (let x = 0; x < 5; x++) {
  for (let y = 0; y < 5; y++) {
    result = Math.min(result, dp[n - 1][x][y]);
  }
}

console.log(result);