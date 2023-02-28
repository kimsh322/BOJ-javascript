const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
for (let i = 0; i < +n; i++) {
  let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(") sum++;
    if (input[i][j] === ")") sum--;
    if (sum < 0) break;
  }
  if (sum === 0) console.log("YES");
  else console.log("NO");
}