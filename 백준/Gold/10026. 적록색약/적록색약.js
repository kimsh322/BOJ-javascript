const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let arr = [];
for (let i = 0; i < n; i++) arr.push(input[i].split(""));
let arr2 = JSON.parse(JSON.stringify(arr));
const dfs = (x, y, arr) => {
  let cur = arr[x][y];
  arr[x][y] = 1;
  if (x > 0 && arr[x - 1][y] === cur) dfs(x - 1, y, arr);
  if (y > 0 && arr[x][y - 1] === cur) dfs(x, y - 1, arr);
  if (x < +n - 1 && arr[x + 1][y] === cur) dfs(x + 1, y, arr);
  if (y < +n - 1 && arr[x][y + 1] === cur) dfs(x, y + 1, arr);
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr2[i][j] === "G") arr2[i][j] = "R";
  }
}

let num = 0,
  num2 = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] !== 1) {
      dfs(i, j, arr);
      num++;
    }
    if (arr2[i][j] !== 1) {
      dfs(i, j, arr2);
      num2++;
    }
  }
}
console.log(num, num2);