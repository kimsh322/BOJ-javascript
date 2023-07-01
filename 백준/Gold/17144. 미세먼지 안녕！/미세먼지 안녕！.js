const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [r, c, t] = a.split(" ").map(Number);
const firstArr = [];
for (let i = 0; i < r; i++) {
  firstArr.push(input[i].split(" ").map(Number));
}

// 공기청정기 위치
let location = 0;
for (let i = 0; i < r; i++) {
  if (firstArr[i][0] === -1) {
    location = i;
    break;
  }
}

// 1초 확산함수
const diffusion = (arr) => {
  const newArr = JSON.parse(JSON.stringify(arr));
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (arr[i][j] <= 0) continue;
      let count = 0;
      for (let k = 0; k < 4; k++) {
        const curY = i + dy[k];
        const curX = j + dx[k];
        if (curX >= 0 && curX < c && curY >= 0 && curY < r && arr[curY][curX] !== -1) {
          newArr[curY][curX] += Math.floor(arr[i][j] / 5);
          count++;
        }
      }
      newArr[i][j] -= count * Math.floor(arr[i][j] / 5);
    }
  }
  return newArr;
};

// 1초 위쪽 공기청정 함수
const upperCleaner = (arr) => {
  for (let i = location - 1; i > 0; i--) {
    arr[i][0] = arr[i - 1][0];
  }
  for (let i = 0; i < c - 1; i++) {
    arr[0][i] = arr[0][i + 1];
  }
  for (let i = 0; i < location; i++) {
    arr[i][c - 1] = arr[i + 1][c - 1];
  }
  for (let i = c - 1; i > 1; i--) {
    arr[location][i] = arr[location][i - 1];
  }
  arr[location][1] = 0;
};
// 1초 아래쪽 공기청정 함수
const lowerCleaner = (arr) => {
  for (let i = location + 2; i < r - 1; i++) {
    arr[i][0] = arr[i + 1][0];
  }
  for (let i = 0; i < c - 1; i++) {
    arr[r - 1][i] = arr[r - 1][i + 1];
  }
  for (let i = r - 1; i > location + 1; i--) {
    arr[i][c - 1] = arr[i - 1][c - 1];
  }
  for (let i = c - 1; i > 1; i--) {
    arr[location + 1][i] = arr[location + 1][i - 1];
  }
  arr[location + 1][1] = 0;
};

let resultArr = JSON.parse(JSON.stringify(firstArr));
let time = 0;
while (true) {
  if (time === t) break;
  let newArr = diffusion(resultArr);
  upperCleaner(newArr);
  lowerCleaner(newArr);
  time++;
  resultArr = newArr;
}

let result = 0;
for (let i = 0; i < r; i++) {
  for (let j = 0; j < c; j++) {
    if (resultArr[i][j] > 0) result += resultArr[i][j];
  }
}
console.log(result);