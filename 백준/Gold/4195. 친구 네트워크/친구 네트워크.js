const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let index = 0;
let result = "";
for (let test = 0; test < n; test++) {
  const f = +input[index++];
  const parent = {};
  const countObj = {};
  for (let relation = 0; relation < f; relation++) {
    const [a, b] = input[index++].split(" ");
    if (!(a in parent)) {
      parent[a] = a;
      countObj[a] = 1;
    }
    if (!(b in parent)) {
      parent[b] = b;
      countObj[b] = 1;
    }
    function checkParent(x) {
      if (parent[x] !== x) {
        parent[x] = checkParent(parent[x]);
      }
      return parent[x];
    }
    const A = checkParent(a);
    const B = checkParent(b);
    if (A !== B) {
      parent[B] = A;
      countObj[A] += countObj[B];
    }

    result += `${countObj[checkParent(a)]}\n`;
  }
}
console.log(result);