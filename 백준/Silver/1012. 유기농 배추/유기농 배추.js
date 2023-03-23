const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let result = "";
let start = 1;

for (let i = 0; i < input[0]; i++) {
  let [m, n, k] = input[start].split(" ").map(Number);
  let arr = [];
  for (let i = 0; i < m; i++) arr.push(Array(n).fill(0));

  for (let i = start + 1; i <= start + k; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    arr[x][y] = 1;
  }

  const dfs = (x, y) => {
    arr[x][y] = 0;
    if (x > 0 && arr[x - 1][y] === 1) dfs(x - 1, y);
    if (x < m - 1 && arr[x + 1][y] === 1) dfs(x + 1, y);
    if (y > 0 && arr[x][y - 1] === 1) dfs(x, y - 1);
    if (y < n - 1 && arr[x][y + 1] === 1) dfs(x, y + 1);
  };

  let num = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j]) {
        dfs(i, j);
        num++;
      }
    }
  }

  result += num + "\n";
  start += k + 1;
}
console.log(result);