const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let arr = [];
for (let i = 0; i < n; i++) arr.push(input[i].split(" ").map(Number));
let size = 2;
let x, y;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 9) {
      x = i;
      y = j;
      arr[i][j] = 0;
      break;
    }
  }
}

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];

const bfs = (startX, startY) => {
  let queue = [[startX, startY]];
  check[startX][startY] = 0;
  while (queue.length) {
    let [curX, curY] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = curX + dx[i];
      let ny = curY + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (check[nx][ny] !== -1 || arr[nx][ny] > size) continue;
      check[nx][ny] = check[curX][curY] + 1;
      if (arr[nx][ny] !== 0 && arr[nx][ny] < size) {
        if (minDist > check[nx][ny]) {
          minX = nx;
          minY = ny;
          minDist = check[nx][ny];
        }
        if (minDist === check[nx][ny]) {
          if (minX === nx) {
            if (minY > ny) {
              minX = nx;
              minY = ny;
            }
          } else if (minX > nx) {
            minX = nx;
            minY = ny;
          }
        }
      }
      queue.push([nx, ny]);
    }
  }
};
let result = 0;
let eatCount = 0;
let check = Array(+n).fill(0).map(() => Array(+n).fill(-1));
let minDist;
let minX;
let minY;

while (true) {
  minDist = 10000;
  minX = 100;
  minY = 100;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      check[i][j] = -1;
    }
  }
  bfs(x, y);
  if (minX < 21 && minY < 21) {
    result += check[minX][minY];
    eatCount++;
    if (eatCount === size) {
      size++;
      eatCount = 0;
    }
    arr[minX][minY] = 0;
    x = minX;
    y = minY;
  } else break;
}
console.log(result);