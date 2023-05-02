const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);
let arr = [];
arr.push(Array(n+1).fill(0))
for (let i = 0; i < n; i++) {
  arr.push([0,...input[i].split(" ").map(Number)]);
}

for(let i=1; i<=n; i++){
  for(let j=1; j<=n; j++){
    arr[i][j] += arr[i-1][j];
  }
}

for(let i=1; i<=n; i++){
  for(let j=1; j<=n; j++){
    arr[i][j] += arr[i][j-1];
  }
}
let result = '';
for (let i = n; i < n + m; i++) {
  let [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  let cur = arr[x2][y2] - arr[x1-1][y2] - arr[x2][y1-1] + arr[x1-1][y1-1];
  result += cur + '\n';
}
console.log(result);