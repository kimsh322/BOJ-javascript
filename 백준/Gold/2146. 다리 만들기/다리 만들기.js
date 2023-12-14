const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = +input[0];
const arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i].split(" ").map(Number));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
// 섬 번호매기기
const dfs = (y, x, num) => {
  arr[y][x] = num;
  for (let i = 0; i < 4; i++) {
    const curY = y + dy[i];
    const curX = x + dx[i];
    if (curY < 0 || curY >= n || curX < 0 || curX >= n) continue;
    if (arr[curY][curX] !== 1) continue;
    dfs(curY, curX, num);
  }
};
let num = 2;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 1) dfs(i, j, num++);
  }
}
// 바다인접 타일인지 확인
const check = (y, x, num) => {
  let count = 0;
  for (let i = 0; i < 4; i++) {
    const curY = y + dy[i];
    const curX = x + dx[i];
    if (curY < 0 || curY >= n || curX < 0 || curX >= n) continue;
    if (arr[curY][curX] !== num) count++;
  }
  if (count) return true;
  return false;
};

let result = 99999;
const bfs = (y, x) => {
  const queue = [[y, x, arr[y][x], 0]];
  const visited = Array(n)
    .fill(0)
    .map(() => Array(n).fill(false));
  let idx = 0;
  while (idx < queue.length) {
    const [y, x, num, count] = queue[idx++];
    if (result !== 99999 && count > result) continue;
    for (let i = 0; i < 4; i++) {
      const curY = y + dy[i];
      const curX = x + dx[i];
      if (curY < 0 || curY >= n || curX < 0 || curX >= n || visited[curY][curX]) continue;
      visited[curY][curX] = true;
      if (arr[curY][curX] === 0) queue.push([curY, curX, num, count + 1]);
      else if (arr[curY][curX] !== num) result = Math.min(result, count);
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] !== 0 && check(i, j, arr[i][j])) bfs(i, j);
  }
}

console.log(result);