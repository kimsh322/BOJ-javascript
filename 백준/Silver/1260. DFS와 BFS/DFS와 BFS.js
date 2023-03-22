const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, m, v] = input[0].split(" ").map(Number);
let adjArr = Array(n + 1).fill(0).map(() => []);

for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  adjArr[a].push(b);
  adjArr[b].push(a);
}

for (let i = 1; i < adjArr.length; i++) {
  adjArr[i].sort((a, b) => a - b);
}

let isChecked1 = [];
let result1 = [];
const dfs = (vertex) => {
  isChecked1[vertex] = true;
  result1.push(vertex);
  adjArr[vertex].forEach((el) => {
    if (!isChecked1[el]) dfs(el);
  });
};
dfs(v);
console.log(result1.join(" "));

let isChecked2 = [];
let result2 = [];
const bfs = (vertex) => {
  let queue = [vertex];
  isChecked2[vertex] = true;
  while (queue.length > 0) {
    let node = queue.shift();
    result2.push(node);
    adjArr[node].forEach((el) => {
      if (!isChecked2[el]) {
        {
          isChecked2[el] = true;
          queue.push(el);
        }
      }
    });
  }
};
bfs(v);
console.log(result2.join(" "));