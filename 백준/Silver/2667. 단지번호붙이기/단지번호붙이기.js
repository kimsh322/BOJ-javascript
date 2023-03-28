const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let arr = [];
for (let i = 0; i < n; i++) arr.push(input[i].split("").map(Number));
let num = 0;
const dfs = (x, y) => {
  arr[x][y] = 0;
  num++;
  if (x > 0 && arr[x - 1][y] === 1) dfs(x - 1, y);
  if (y > 0 && arr[x][y - 1] === 1) dfs(x, y - 1);
  if (x < arr.length - 1 && arr[x + 1][y] === 1) dfs(x + 1, y);
  if (y < arr.length - 1 && arr[x][y + 1] === 1) dfs(x, y + 1);
  return num;
};
let total = 0;
let result = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    num = 0;
    if (arr[i][j] === 1) {
      dfs(i, j);
      total++;
    }
    if (num > 0) result.push(num);
  }
}
result.sort((a, b) => a - b);
console.log(total);
console.log(result.join("\n"));
