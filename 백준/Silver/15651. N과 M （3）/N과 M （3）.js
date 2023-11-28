const [n, m] = require("fs").readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const newArr = [];
let result = "";
const func = (length) => {
  if (length === m) {
    result += newArr.join(" ") + "\n";
    return;
  }
  for (let i = 1; i <= n; i++) {
    newArr.push(i);
    func(length + 1);
    newArr.pop();
  }
};
func(0);
console.log(result);
