const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let result = "";
for (let i = 0; i < n; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  let queue = [[start, ""]];
  let visited = Array(10001).fill(false);
  visited[start] = true;
  while (true) {
    let [cur, curStr] = queue.shift();
    const getD = (cur * 2) % 10000;
    const getS = cur === 0 ? 9999 : cur - 1;
    const getL = Math.floor(cur / 1000) + (cur % 1000) * 10;
    const getR = (cur % 10) * 1000 + Math.floor(cur / 10);
    if (getD === end) {
      result += curStr + "D" + "\n";
      break;
    }
    if (getS === end) {
      result += curStr + "S" + "\n";
      break;
    }
    if (getL === end) {
      result += curStr + "L" + "\n";
      break;
    }
    if (getR === end) {
      result += curStr + "R" + "\n";
      break;
    }
    if (!visited[getD]) {
      queue.push([getD, curStr + "D"]);
      visited[getD] = true;
    }
    if (!visited[getS]) {
      queue.push([getS, curStr + "S"]);
      visited[getS] = true;
    }
    if (!visited[getL]) {
      queue.push([getL, curStr + "L"]);
      visited[getL] = true;
    }
    if (!visited[getR]) {
      queue.push([getR, curStr + "R"]);
      visited[getR] = true;
    }
  }
}
console.log(result);