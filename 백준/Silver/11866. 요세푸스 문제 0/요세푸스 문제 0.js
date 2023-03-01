const input = require("fs").readFileSync('/dev/stdin').toString().trim().split(" ");
let [n, k] = input.map(Number);

let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let result = "<";
for (let i = 0; i < n; i++) {
  let cur = k - 1;
  while (cur >= arr.length) cur -= arr.length;
  result += arr[cur] + ", ";
  arr = [...arr.slice(cur + 1), ...arr.slice(0, cur)];
}
result = result.slice(0, -2) + ">";
console.log(result);