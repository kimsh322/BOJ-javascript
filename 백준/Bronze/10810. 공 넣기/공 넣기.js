const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, m] = a.split(" ").map(Number);
let result = Array(n).fill(0);
for (let i = 0; i < m; i++) {
  let arr = input[i].split(" ").map(Number);
  for (let j = arr[0] - 1; j < arr[1]; j++) {
    result[j] = arr[2];
  }
}
console.log(result.join(" "));