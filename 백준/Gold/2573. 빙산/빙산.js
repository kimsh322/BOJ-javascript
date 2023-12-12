const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i].split(" ").map(Number));

const check = () => {
  let total = 0;
  let st;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] !== 0) {
        total++;
        st = [i, j];
      }
    }
  }
  if (total === 0) return 0;
  const visited = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false));
  let count = 1;
  const dfs = (y, x) => {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    for (let i = 0; i < 4; i++) {
      const curY = y + dy[i];
      const curX = x + dx[i];
      if (visited[curY][curX]) continue;
      if (curY <= 0 || curY >= n || curX <= 0 || curX >= m) continue;
      if (arr[curY][curX] === 0) continue;
      count++;
      visited[curY][curX] = true;
      dfs(curY, curX);
    }
  };
  visited[st[0]][st[1]] = true;
  dfs(...st);
  if (total !== count) return false;
  return true;
};

const newYear = () => {
  const newArr = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0));
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) continue;
      let count = 0;
      for (let k = 0; k < 4; k++) {
        const nearY = i + dy[k];
        const nearX = j + dx[k];
        if (arr[nearY][nearX] === 0) count++;
      }
      newArr[i][j] = Math.max(arr[i][j] - count, 0);
    }
  }
  arr = newArr;
};

let result = 0;
while (true) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] !== 0) {
        total++;
      }
    }
  }
  if (!total) {
    result = 0;
    break;
  }
  newYear();
  result++;
  let checkVal = check();
  if (checkVal === 0) {
    result = 0;
    break;
  }
  if (!checkVal) break;
}

console.log(result);