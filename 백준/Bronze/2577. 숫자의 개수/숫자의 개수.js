const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let result = "" + input[0] * input[1] * input[2];
for (let j = 0; j <= 9; j++) {
  let num = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i] == j) num++;
  }
  console.log(num);
}