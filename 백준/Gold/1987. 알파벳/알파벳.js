const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [r, c] = n.split(" ").map(Number);
const table = [];
for (let i = 0; i < input.length; i++) {
  table.push(input[i].split(""));
}
const visitedAl = Array(26).fill(false);
visitedAl[table[0][0].charCodeAt(0) - 65] = true;
let max = 1;
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const func = (x, y, leng) => {
  max = Math.max(max, leng);
  for (let i = 0; i < 4; i++) {
    let curX = x + dx[i];
    let curY = y + dy[i];
    if (curX < 0 || curX >= c || curY < 0 || curY >= r) continue;
    if (visitedAl[table[curY][curX].charCodeAt(0) - 65]) continue;
    visitedAl[table[curY][curX].charCodeAt(0) - 65] = true;
    func(curX, curY, leng + 1);
    visitedAl[table[curY][curX].charCodeAt(0) - 65] = false;
  }
};
func(0, 0, 1);
console.log(max);