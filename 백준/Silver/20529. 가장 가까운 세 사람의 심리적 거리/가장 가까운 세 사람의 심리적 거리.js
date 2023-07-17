const [t, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const dist = (a, b) => {
  let count = 0;
  for (let i = 0; i < 4; i++) {
    if (a[i] !== b[i]) count++;
  }
  return count;
};

const newArr = [];
let result = Number.MAX_SAFE_INTEGER;

const combi = (arr, visited) => {
  if (newArr.length === 3) {
    result = Math.min(
      result,
      dist(newArr[0], newArr[1]) + dist(newArr[1], newArr[2]) + dist(newArr[2], newArr[0])
    );
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    newArr.push(arr[i]);
    combi(arr, visited);
    newArr.pop();
    visited[i] = false;
  }
};

let str = "";

for (let i = 0; i < 2 * t; i += 2) {
  const n = +input[i];
  if (n > 32) {
    str += 0 + "\n";
    continue;
  }
  const arr = input[i + 1].split(" ");
  const visited = Array(n).fill(false);
  result = Number.MAX_SAFE_INTEGER;

  combi(arr, visited);
  str += result + "\n";
}

console.log(str);