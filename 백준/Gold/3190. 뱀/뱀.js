const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = +input[0];
const k = +input[1];
const apple = Array(n)
  .fill(0)
  .map(() => Array(n).fill(0));

for (let i = 2; i < k + 2; i++) {
  const [y, x] = input[i].split(" ").map(Number);
  apple[y - 1][x - 1] = 1;
}
const l = +input[k + 2];

let time = 0;
let curX = 0;
let curY = 0;
let direction = "R";
const changeDirectionL = {
  R: "U",
  L: "D",
  U: "L",
  D: "R",
};
const changeDirectionD = {
  R: "D",
  L: "U",
  U: "R",
  D: "L",
};

const func = (direct) => {
  if (direct === "R") curX++;
  if (direct === "D") curY++;
  if (direct === "L") curX--;
  if (direct === "U") curY--;
};
const dequeue = [[0, 0]];
let endTime = 0;
const solution = () => {
  for (let i = k + 3; i < input.length; i++) {
    const [x, c] = input[i].split(" ");
    for (let j = 0; j < x - endTime; j++) {
      time++;
      func(direction);
      if (curY < 0 || curX < 0 || curY >= n || curX >= n) return;
      for (let el of dequeue) {
        if (el[0] === curY && el[1] === curX) return;
      }
      dequeue.unshift([curY, curX]);
      if (apple[curY][curX] === 1) apple[curY][curX] = 0;
      else dequeue.pop();
    }
    if (c === "L") direction = changeDirectionL[direction];
    else direction = changeDirectionD[direction];
    endTime = time;
  }
  while (true) {
    time++;
    func(direction);
    if (curY < 0 || curX < 0 || curY >= n || curX >= n) return;
    for (let el of dequeue) {
      if (el[0] === curY && el[1] === curX) return;
    }
    dequeue.unshift([curY, curX]);
    if (apple[curY][curX] === 1) apple[curY][curX] = 0;
    else dequeue.pop();
  }
};

solution();
console.log(time);