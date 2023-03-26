const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = input[i].split("").map(Number);
}
let result = "";
const func = (size, x, y) => {
  let bool = true;
  let cur = arr[x][y];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (arr[x + i][y + j] !== cur) {
        bool = false;
        break;
      }
    }
    if (!bool) break;
  }
  if (bool) {
    result += cur;
  } else {
    result += "(";
    size /= 2;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        func(size, x + i * size, y + j * size);
      }
    }

    result += ")";
  }
};
func(+n, 0, 0);
console.log(result);