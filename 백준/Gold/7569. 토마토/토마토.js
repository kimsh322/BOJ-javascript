const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, m, h] = a.split(" ").map(Number);
// 3차원 배열 만들기
let arr = Array(h).fill(0).map(() => []);
for (let j = 0; j < h; j++) {
  for (let i = 0; i < m; i++) arr[j][i] = input[j * m + i].split(" ").map(Number);
}

let minusOne = 0;
let queue = [];
let num = 0;
// 처음 1 queue에 넣고 마이너스 숫자 세기
for (let k = 0; k < h; k++) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[k][i][j] === 1) {
        queue.push([k, i, j, 0]);
        num++;
      }
      if (arr[k][i][j] === -1) minusOne++;
    }
  }
}

let result;
// 전체 토마토개수
let total = m * n * h - minusOne;
let i = 0;
// 주변 0 찾아서 1로 바꾸고 queue에 넣기
while (queue.length > i) {
  let [curZ, curY, curX, day] = queue[i];
  if (curY > 0 && arr[curZ][curY - 1][curX] === 0) {
    arr[curZ][curY - 1][curX] = 1;
    queue.push([curZ, curY - 1, curX, day + 1]);
    num++;
  }
  if (curY < m - 1 && arr[curZ][curY + 1][curX] === 0) {
    arr[curZ][curY + 1][curX] = 1;
    queue.push([curZ, curY + 1, curX, day + 1]);
    num++;
  }
  if (curX > 0 && arr[curZ][curY][curX - 1] === 0) {
    arr[curZ][curY][curX - 1] = 1;
    queue.push([curZ, curY, curX - 1, day + 1]);
    num++;
  }
  if (curX < n - 1 && arr[curZ][curY][curX + 1] === 0) {
    arr[curZ][curY][curX + 1] = 1;
    queue.push([curZ, curY, curX + 1, day + 1]);
    num++;
  }
  if (curZ > 0 && arr[curZ - 1][curY][curX] === 0) {
    arr[curZ - 1][curY][curX] = 1;
    queue.push([curZ - 1, curY, curX, day + 1]);
    num++;
  }
  if (curZ < h - 1 && arr[curZ + 1][curY][curX] === 0) {
    arr[curZ + 1][curY][curX] = 1;
    queue.push([curZ + 1, curY, curX, day + 1]);
    num++;
  }
  if (total === num) {
    if (day) result = day + 1;
    else result = day;
    break;
  }
  i++;
}

if (result === undefined) console.log(-1);
else console.log(result);