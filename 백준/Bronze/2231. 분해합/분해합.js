const input = require("fs").readFileSync('/dev/stdin').toString().trim();
let leng = input.length;
let start = +input - leng * 9;
let bool = false;
for (let i = start; i < +input; i++) {
  let n = ("" + i).split("").reduce((sum, el) => sum + +el, 0);
  if (i + n === +input) {
    console.log(i);
    bool = true;
    break;
  }
}
if (!bool) console.log(0);