const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const [n, m] = input[0].split(" ").map((el) => +el);
for (let i = 1; i <= n; i++) {
  let arr1 = input[i].split(" ").map((el) => +el);
  let arr2 = input[i + n].split(" ").map((el) => +el);
  let arr3 = [];
  for (let j = 0; j < m; j++) {
    arr3.push(arr1[j] + arr2[j]);
  }
  console.log(arr3.join(" "));
}