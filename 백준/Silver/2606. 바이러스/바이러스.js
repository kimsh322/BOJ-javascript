const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

//인접리스트 만들기
let graph = Array(+input[0] + 1);
for (let i = 0; i < graph.length; i++) graph[i] = [];

for (let i = 2; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
// 재귀 dfs
let virus = {};
const getVirus = (node) => {
  if (!node) return null;
  virus[node] = true;
  graph[node].forEach((el) => {
    if (!virus[el]) return getVirus(el);
  });
};
getVirus(1);
let result = 0;
for (let key in virus) result++;
console.log(result - 1);