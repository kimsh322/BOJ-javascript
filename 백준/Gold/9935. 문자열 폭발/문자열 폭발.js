const [str, boom] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let leng = str.length;
let boomLeng = boom.length;
let stack = [];
for (let i = 0; i < leng; i++) {
  stack.push(str[i]);
  if (stack[stack.length - 1] === boom[boomLeng - 1]) {
    let bool = true;
    for (let j = 1; j < boomLeng; j++) {
      if (stack[stack.length - j - 1] !== boom[boomLeng - j - 1]) bool = false;
    }
    if (bool) for (let j = 0; j < boomLeng; j++) stack.pop();
  }
}
if (stack.length === 0) console.log("FRULA");
else console.log(stack.join(""));