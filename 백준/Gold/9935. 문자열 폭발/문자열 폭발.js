const [str, boom] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let leng = str.length;
let boomLeng = boom.length;
let stack = [];
for (let i = 0; i < leng; i++) {
  stack.push(str[i]);
  if (stack.slice(-boomLeng).join("") === boom) {
    for (let j = 0; j < boomLeng; j++) stack.pop();
  }
}
if (stack.length === 0) console.log("FRULA");
else console.log(stack.join(""));