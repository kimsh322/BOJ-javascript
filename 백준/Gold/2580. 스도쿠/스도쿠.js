const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const inputArr = [];
for (let i = 0; i < input.length; i++) inputArr.push(input[i].split(" ").map(Number));
const zero = [];
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (inputArr[i][j] === 0) zero.push([i, j]);
  }
}
const isValid = (i, j, k) => {
  for (let a = 0; a < 9; a++) {
    if (inputArr[i][a] === k) return false;
    if (inputArr[a][j] === k) return false;
  }
  let idX = Math.floor(j / 3);
  let idY = Math.floor(i / 3);
  for (let a = 3 * idY; a < 3 * idY + 3; a++) {
    for (let b = 3 * idX; b < 3 * idX + 3; b++) {
      if (inputArr[a][b] === k) return false;
    }
  }
  return true;
};

const func = (count) => {
  if (count === zero.length) {
    let result = "";
    for (let i = 0; i < 9; i++) result += inputArr[i].join(" ") + "\n";
    console.log(result);
    process.exit(0);
  }
  for (let i = 1; i <= 9; i++) {
    let curX = zero[count][1];
    let curY = zero[count][0];
    if (isValid(curY, curX, i)) {
      inputArr[curY][curX] = i;
      func(count + 1);
      inputArr[curY][curX] = 0;
    }
  }
};
func(0);