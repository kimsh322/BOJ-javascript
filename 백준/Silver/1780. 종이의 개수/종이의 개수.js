const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input[i].split(" ").map(Number));
}
let result = { 0: 0, 1: 0, "-1": 0 };

const func = (n, x, y) => {
  let cur = arr[x][y];
  let bool = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[x + i][y + j] !== cur) {
        bool = false;
        break;
      }
    }
    if (!bool) break;
  }
  if (bool) result[cur]++;
  else {
    n /= 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        func(n, x + i * n, y + j * n);
      }
    }
  }
};
func(n, 0, 0);
let resultLog = `${result["-1"]}\n${result[0]}\n${result[1]}`;
console.log(resultLog);