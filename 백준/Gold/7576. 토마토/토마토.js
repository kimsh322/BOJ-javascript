const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 0; i < m; i++) arr[i] = input[i + 1].split(" ").map(Number);
let minusOne = 0;
let queue = [];
let num = 0;
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] === 1) {
      queue.push([i, j, 0]);
      num++;
    }
    if (arr[i][j] === -1) minusOne++;
  }
}
let result;
let total = m * n - minusOne;
let i = 0;
while (queue.length > i) {
  let [curI, curJ, day] = queue[i];
  if (curI > 0 && arr[curI - 1][curJ] === 0) {
    arr[curI - 1][curJ] = 1;
    queue.push([curI - 1, curJ, day + 1]);
    num++;
  }
  if (curI < m - 1 && arr[curI + 1][curJ] === 0) {
    arr[curI + 1][curJ] = 1;
    queue.push([curI + 1, curJ, day + 1]);
    num++;
  }
  if (curJ > 0 && arr[curI][curJ - 1] === 0) {
    arr[curI][curJ - 1] = 1;
    queue.push([curI, curJ - 1, day + 1]);
    num++;
  }
  if (curJ < n - 1 && arr[curI][curJ + 1] === 0) {
    arr[curI][curJ + 1] = 1;
    queue.push([curI, curJ + 1, day + 1]);
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