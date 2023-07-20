const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const arr = [];
const zero = [];
for (let i = 0; i < 9; i++) {
  const line = input[i].split("").map(Number);
  for (let j = 0; j < 9; j++) {
    if (line[j] === 0) zero.push([i, j]);
  }
  arr.push(line);
}
const leng = zero.length;

const check = (y, x) => {
  const cur = arr[y][x];
  //가로
  for (let i = 0; i < 9; i++) {
    if (i === x) continue;
    if (arr[y][i] === cur) return false;
  }
  //세로
  for (let i = 0; i < 9; i++) {
    if (i === y) continue;
    if (arr[i][x] === cur) return false;
  }
  //네모
  let startY = Math.floor(y / 3) * 3;
  let startX = Math.floor(x / 3) * 3;
  for (let i = startY; i < startY + 3; i++) {
    for (let j = startX; j < startX + 3; j++) {
      if (i === y && j === x) continue;
      if (arr[i][j] === cur) return false;
    }
  }

  return true;
};

let result = "";
let end = false;
const func = (n) => {
  if (n === leng) {
    for (let i = 0; i < 9; i++) {
      result += arr[i].join("") + "\n";
    }
    end = true;
    return;
  }
  let [y, x] = zero[n];
  for (let i = 1; i <= 9; i++) {
    if (end) return;
    arr[y][x] = i;
    if (check(y, x)) func(n + 1);
    arr[y][x] = 0;
  }
};

func(0);
console.log(result);