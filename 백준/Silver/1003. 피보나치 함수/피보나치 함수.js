const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let dict = { 0: 0, 1: 1 };
const fibo = (num) => {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  if (num in dict) return dict[num];
  else {
    let next = fibo(num - 1) + fibo(num - 2);
    dict[num] = next;
    return next;
  }
};
let result = "";
let obj = { 0: "1 0", 1: "0 1" };
for (let i = 1; i <= +input[0]; i++) {
  if (input[i] in obj) result += obj[input[i]] + "\n";
  else {
    obj[input[i]] = `${fibo(+input[i] - 1)} ${fibo(+input[i])}`;
    result += obj[input[i]] + "\n";
  }
}
console.log(result);