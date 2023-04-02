const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, m] = a.split(" ").map(Number);
let arr = Array(n);
for (let i = 0; i < n; i++) arr[i] = [...input[i].split("").map(Number)];

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

let queue = [[0, 0]];

while (queue.length > 0) {
  let [x, y] = queue.shift();
  for (let i = 0; i < 4; i++) {
    let curX = x + dx[i];
    let curY = y + dy[i];
    if (curX >= 0 && curX < n && curY >= 0 && curY < m) {
      if (arr[curX][curY] === 1) {
        queue.push([curX, curY]);
        arr[curX][curY] += arr[x][y];
      }
    }
  }
}

console.log(arr[n - 1][m - 1]);