const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const k = +input[0];
const arr = input[1].split(" ").map(Number);
const targetNode = +input[2];
if (arr[targetNode] === -1) console.log(0);
else {
  const deleteNode = (start, current, end) => {
    if (arr[current] === -1) return;
    if (current === end) {
      arr[current] = -2;
      return;
    }
    if (arr[current] === end || arr[current] === -2) {
      arr[start] = -2;
      return;
    }
    deleteNode(start, arr[current], end);
  };

  for (let i = 0; i < arr.length; i++) {
    deleteNode(i, i, targetNode);
  }
  const count = Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -2) {
      count[i] = -2;
      continue;
    }
    if (arr[i] === -1) continue;
    count[arr[i]]++;
  }
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count[i] === 0) result++;
  }
  console.log(result);
}