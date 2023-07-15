const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);
const lab = [];
for (let i = 0; i < n; i++) {
  lab.push(input[i].split(" ").map(Number));
}

const spread = (arr) => {
  const queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 2) queue.push([i, j]);
    }
  }

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (queue.length) {
    const [y, x] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const curY = y + dy[i];
      const curX = x + dx[i];
      if (curY >= 0 && curY < n && curX >= 0 && curX < m) {
        if (arr[curY][curX] === 0) {
          arr[curY][curX] = 2;
          queue.push([curY, curX]);
        }
      }
    }
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 0) count++;
    }
  }
  return count;
};

const zero = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (lab[i][j] === 0) zero.push([i, j]);
  }
}

let result = 0;
for (let i = 0; i < zero.length; i++) {
  for (let j = i + 1; j < zero.length; j++) {
    for (let k = j + 1; k < zero.length; k++) {
      const newArr = JSON.parse(JSON.stringify(lab));
      for (let [y, x] of [zero[i], zero[j], zero[k]]) {
        newArr[y][x] = 1;
      }
      const num = spread(newArr);
      result = Math.max(result, num);
    }
  }
}

console.log(result);