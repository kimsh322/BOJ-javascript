const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let arr = [];
for (let i = 0; i < +n; i++) {
  arr.push(input[i].split(" ").map(Number));
}
let result = [0, 0];

const func = (leng, x, y) => {
  let cur = arr[x][y];
  let bool = true;
  if (leng === 1) {
    result[cur]++;
    return;
  }
  for (let i = x; i < x + leng; i++) {
    for (let j = y; j < y + leng; j++) {
      if (arr[i][j] !== cur) {
        bool = false;
        break;
      }
    }
  }
  if (bool) result[cur]++;
  else {
    leng /= 2;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        func(leng, x + i * leng, y + j * leng);
      }
    }
  }
};
func(+n, 0, 0);
console.log(result[0]);
console.log(result[1]);