const rl = require("readline").createInterface({
     input: process.stdin,
     output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  solution(input);
  process.exit();
});

function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  const parent = Array.from({ length: +n + 1 }, (_, index) => index);

  const findParent = (a) => {
    if (parent[a] !== a) parent[a] = findParent(parent[a]);
    return parent[a];
  };

  const compareParent = (a, b) => {
    return findParent(a) === findParent(b);
  };

  const unionParent = (a, b) => {
    const A = findParent(a);
    const B = findParent(b);
    parent[A] = B;
  };

  let result = "";
  for (let i = 1; i <= m; i++) {
    const [command, a, b] = input[i].split(" ").map(Number);
    if (command === 0) {
      unionParent(a, b);
      continue;
    }
    const isYes = compareParent(a, b);
    if (isYes) result += "YES\n";
    else result += "NO\n";
  }

  console.log(result);
}
