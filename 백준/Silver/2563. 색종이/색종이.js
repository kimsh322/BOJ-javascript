const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(Array(100).fill(0));
}

for (let i = 0; i < +a; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      arr[j][k] = 1;
    }
  }
}

let count = 0;
for (let el of arr) {
  for (let el2 of el) {
    if (el2 === 1) count++;
  }
}
console.log(count);