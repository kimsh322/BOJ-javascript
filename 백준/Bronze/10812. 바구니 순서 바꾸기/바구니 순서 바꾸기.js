const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let result = [];
for (let aa = 1; aa <= n; aa++) {
  result.push(aa);
}

for (let aa = 1; aa <= m; aa++) {
  let [i, j, k] = input[aa].split(" ").map(Number);
  let arr = [...result.slice(k - 1, j), ...result.slice(i - 1, k - 1)];
  result = [...result.slice(0, i - 1), ...arr, ...result.slice(j)];
}
console.log(result.join(" "));