const [n, m] = require("fs").readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const newArr = [];
const visited = Array(n + 1).fill(false);
let result = "";

const func = (a) => {
  if (a === m) {
    result += newArr.join(" ") + "\n";
  }
  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    newArr.push(i);
    func(a + 1);
    newArr.pop();
    visited[i] = false;
  }
};

func(0);
console.log(result);
