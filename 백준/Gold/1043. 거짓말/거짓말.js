let [a, b, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);
const [know, ...knowArr] = b.split(" ").map(Number);
const set = new Set([...knowArr]);
const party = [];
let result = 0;
for (let i = 0; i < m; i++) {
  const [num, ...people] = input[i].split(" ").map(Number);
  party.push([...people]);
}
let leng = set.size;
while (true) {
  for (let el of party) {
    let bool = false;
    for (let el2 of el) {
      if (set.has(el2)) {
        bool = true;
        break;
      }
    }
    if (bool) {
      for (let el2 of el) set.add(el2);
    }
  }
  if (set.size === leng) break;
  leng = set.size;
}
for (let el of party) {
  let bool = true;
  for (let el2 of el) {
    if (set.has(el2)) {
      bool = false;
      break;
    }
  }
  if (bool) result++;
}

console.log(result);
