const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

let visited = Array(n)
  .fill(0)
  .map(() => Array(n).fill(0));
let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];

const dfs = (x, y, num, total) => {
  if (num === 4) {
    max = Math.max(max, total);
    return;
  }
  for (let i = 0; i < 4; i++) {
    let curX = x + dx[i];
    let curY = y + dy[i];
    if (curX >= 0 && curX < m && curY >= 0 && curY < n && !visited[curY][curX]) {
      let newTotal = total + arr[curY][curX];
      visited[curY][curX] = 1;
      dfs(curX, curY, num + 1, newTotal);
      visited[curY][curX] = 0;
    }
  }
};

const func = (x, y) => {
  let sum = 0;
  if (x + 2 < m && y + 1 < n) {
    sum = arr[y][x] + arr[y][x + 1] + arr[y][x + 2] + arr[y + 1][x + 1];
    max = Math.max(max, sum);
  }
  if (x + 1 < m && y + 2 < n) {
    sum = arr[y][x] + arr[y + 1][x] + arr[y + 2][x] + arr[y + 1][x + 1];
    max = Math.max(max, sum);
  }
  if (x + 2 < m && y > 0) {
    sum = arr[y][x] + arr[y][x + 1] + arr[y][x + 2] + arr[y - 1][x + 1];
    max = Math.max(max, sum);
  }
  if (x + 1 < m && y + 1 < n && y > 0) {
    sum = arr[y][x] + arr[y - 1][x + 1] + arr[y][x + 1] + arr[y + 1][x + 1];
    max = Math.max(max, sum);
  }
};

let max = 0;
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    visited[j][i] = 1;
    dfs(i, j, 1, arr[j][i]);
    visited[j][i] = 0;
    func(i, j);
  }
}

console.log(max);