const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let adjArr = Array(+n + 1)
  .fill(0)
  .map(() => []);
for (let i = 0; i < n - 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  adjArr[a].push(b);
  adjArr[b].push(a);
}

let result = Array(+n + 1).fill(0);
let queue = [];
queue.push(1);
while (queue.length) {
  let cur = queue.shift();
  for (let el of adjArr[cur]) {
    if (result[el] === 0) {
      result[el] = cur;
      queue.push(el);
    }
  }
}
console.log(result.slice(2).join("\n"));