const input = require("fs").readFileSync('/dev/stdin').toString().trim();
let [n, r, c] = input.split(" ").map(Number);
let num = 0;
let find = false;
const func = (n, x, y) => {
  if (n === 1) {
    num = 1;
    return;
  }
  if (find) return;
  if (n === 2) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        num++;
        if (x + i === r && y + j === c) {
          find = true;
          return num;
        }
      }
    }
  } else {
    if (r >= x && r < x + n && c >= y && c < y + n) {
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          func(n / 2, x + i * (n / 2), y + j * (n / 2));
          if (find) break;
        }
      }
    } else num += n * n;
  }
};
func(Math.pow(2, n), 0, 0);
console.log(num - 1);