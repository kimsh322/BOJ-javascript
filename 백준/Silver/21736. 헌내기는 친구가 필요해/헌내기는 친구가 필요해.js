const [aa, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = aa.split(" ").map(Number);
const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input[i].split(""));
}

const visited = Array(n)
  .fill(0)
  .map(() => Array(m).fill(false));
let start;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === "I") {
      start = [i, j];
      visited[i][j] = true;
      break;
    }
  }
  if (start) break;
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let count = 0;
const queue = [start];
while (queue.length) {
  const [y, x] = queue.shift();
  for (let i = 0; i < 4; i++) {
    let curY = y + dy[i];
    let curX = x + dx[i];
    if (curX >= 0 && curX < m && curY >= 0 && curY < n) {
      if (visited[curY][curX]) continue;
      visited[curY][curX] = true;
      if (arr[curY][curX] === "X") continue;
      if (arr[curY][curX] === "P") count++;
      queue.push([curY, curX]);
    }
  }
}
console.log(count ? count : "TT");