let [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;
const adjArr = Array(n).fill(0);
for (let i = 0; i < n; i++) {
  adjArr[i] = input[i].split(" ").map(Number);
}
const dp = Array(n).fill(0).map(() => Array(2 ** n).fill(-1));

const dfs = (x, visited) => {
  if (visited === (1 << n) - 1) {
    if (adjArr[x][0] === 0) return Number.MAX_SAFE_INTEGER;
    return adjArr[x][0];
  }
  if (dp[x][visited] === -1) {
      dp[x][visited] = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
      if (adjArr[x][i] === 0) continue;
      if (visited & (1 << i)) continue;
      dp[x][visited] = Math.min(dp[x][visited], dfs(i, visited | (1 << i)) + adjArr[x][i]);
    }
  }
  return dp[x][visited];
};

console.log(dfs(0, 1));