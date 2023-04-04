const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = +input[0];
const m = +input[1];
if (n === 100) console.log(0);
else if (m === 0) {
  let num = Math.abs(n - 100);
  let leng = ("" + n).length;
  console.log(Math.min(num, leng));
} else if (m === 10) console.log(Math.abs(n - 100));
else {
  const breakButton = input[2].split(" ").map(Number);
  let arr = [];
  for (let i = 0; i < 10; i++) {
    if (breakButton.indexOf(i) !== -1) continue;
    arr.push(i);
  }
  let min = 1000000;
  for (let i = 0; i <= 999999; i++) {
    let bool = true;
    let curArr = ("" + i).split("").map(Number);
    for (let j = 0; j < curArr.length; j++) {
      if (arr.indexOf(curArr[j]) === -1) bool = false;
    }
    if (!bool) continue;
    let num = curArr.length + Math.abs(n - i);
    min = Math.min(min, num);
  }
  min = Math.min(min, Math.abs(n - 100));
  console.log(min);
}