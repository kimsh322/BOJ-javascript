const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [r, c] = n.split(" ").map(Number);
const table = [];
for (let i = 0; i < input.length; i++) {
  table.push(input[i].split(""));
}
const set = new Set();
set.add(table[0][0]);
let max = 1;
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const func = (x, y) => {
  max = Math.max(max, set.size);
  for (let i = 0; i < 4; i++) {
    let curX = x + dx[i];
    let curY = y + dy[i];
    if (curX < 0 || curX >= c || curY < 0 || curY >= r) continue;
    if (set.has(table[curY][curX])) continue;
    set.add(table[curY][curX]);
    func(curX, curY);
    set.delete(table[curY][curX]);
  }
};
func(0, 0);
console.log(max);
