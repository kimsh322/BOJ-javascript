const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let arr = [];
for (let i = 0; i < n; i++) arr.push(input[i].split(" ").map(Number));
let result = Array(+n).fill(0).map(() => Array(+n).fill(0));
let bool = false;
const dfs = (array, x, y) => {
  if (array[x][y] === 1) {
      bool = true;
      return;
  }
  array[x].forEach((el, idx) => {
      if(bool) return;
    if (el === 1) {
      array[x][idx] = 0;
      dfs(array, idx, y);
    }
  });
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let arr2 = JSON.parse(JSON.stringify(arr));
    bool = false;
    dfs(arr2, i, j);
    if (bool) result[i][j] = 1;
  }
}
for (let i = 0; i < n; i++) console.log(result[i].join(" "));