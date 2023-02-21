const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let max = 0;
let raw = 0;
let col = 0;
for (let i = 0; i < 9; i++) {
  input[i] = input[i].split(" ");
  for (let j = 0; j < 9; j++) {
    if (max < +input[i][j]) {
      max = +input[i][j];
      raw = i;
      col = j;
    }
  }
}
console.log(max);
console.log(raw + 1, col + 1);