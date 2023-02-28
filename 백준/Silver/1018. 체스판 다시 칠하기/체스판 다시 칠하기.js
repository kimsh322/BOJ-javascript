const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [m, n] = a.split(" ").map(Number);
let arr = [];
for (let i = 0; i < m; i++) {
  arr.push(input[i].split(""));
}
let black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];
let white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

let min = 100;
for (let aa = 0; aa < m - 7; aa++) {
  for (let bb = 0; bb < n - 7; bb++) {
    let qq = 0;
    let ww = 0;
    for (let i = aa; i < aa + 8; i++) {
      for (let j = bb; j < bb + 8; j++) {
        if (arr[i][j] !== white[i - aa][j - bb]) ww++;
        if (arr[i][j] !== black[i - aa][j - bb]) qq++;
      }
    }
    min = Math.min(min, ww, qq);
  }
}
console.log(min);