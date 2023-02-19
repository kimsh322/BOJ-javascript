const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().split("\n");
for (let i = 0; i < +n; i++) {
  console.log(`${input[i][0]}${input[i][input[i].length - 1]}`);
}
