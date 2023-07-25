const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);

const parent = [];
for (let i = 0; i < n; i++) parent.push(i);

const findRoot = (x) => {
  if (parent[x] === x) return x;
  return (parent[x] = findRoot(parent[x]));
};

const compareRoot = (a, b) => {
  let x = findRoot(a);
  let y = findRoot(b);
  if (x === y) return true;
  else {
    parent[x] = y;
    return false;
  }
};
let result = 0;
for (let i = 0; i < m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  if (compareRoot(a, b)) {
    result = i + 1;
    break;
  }
}
console.log(result);