let [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;

const left = (arr) => {
  const newArr = Array(n)
    .fill(0)
    .map(() => []);
  for (let i = 0; i < n; i++) {
    const queue = [];
    for (let j = 0; j < n; j++) {
      if (arr[i][j] !== 0) queue.push(arr[i][j]);
    }
    for (let j = 0; j < queue.length; j++) {
      if (queue[j] === queue[j + 1]) {
        newArr[i].push(queue[j] * 2);
        j++;
      } else newArr[i].push(queue[j]);
    }
    while (newArr[i].length < n) newArr[i].push(0);
  }
  return newArr;
};

const right = (arr) => {
  const newArr = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    const queue = [];
    for (let j = 0; j < n; j++) {
      if (arr[i][j] !== 0) queue.push(arr[i][j]);
    }
    let count = n - 1;
    for (let j = queue.length - 1; j >= 0; j--) {
      if (queue[j] === queue[j - 1]) {
        newArr[i][count--] = queue[j] * 2;
        j--;
      } else newArr[i][count--] = queue[j];
    }
  }
  return newArr;
};

const up = (arr) => {
  const newArr = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    const queue = [];
    for (let j = 0; j < n; j++) {
      if (arr[j][i] !== 0) queue.push(arr[j][i]);
    }
    let count = 0;
    for (let j = 0; j < queue.length; j++) {
      if (queue[j] === queue[j + 1]) {
        newArr[count++][i] = queue[j] * 2;
        j++;
      } else newArr[count++][i] = queue[j];
    }
  }
  return newArr;
};

const down = (arr) => {
  const newArr = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    const queue = [];
    for (let j = 0; j < n; j++) {
      if (arr[j][i] !== 0) queue.push(arr[j][i]);
    }
    let count = n - 1;
    for (let j = queue.length - 1; j >= 0; j--) {
      if (queue[j] === queue[j - 1]) {
        newArr[count--][i] = queue[j] * 2;
        j--;
      } else newArr[count--][i] = queue[j];
    }
  }
  return newArr;
};

const arr = [];
for (let i = 0; i < n; i++) arr.push(input[i].split(" ").map(Number));

let max = 0;

const func = (arr, num) => {
  if (num === 5) {
    let curMax = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        curMax = Math.max(curMax, arr[i][j]);
      }
    }
    max = Math.max(max, curMax);
    return;
  }
  for (const ft of [up, down, left, right]) {
    func(ft(arr), num + 1);
  }
};

func(arr, 0);
console.log(max);