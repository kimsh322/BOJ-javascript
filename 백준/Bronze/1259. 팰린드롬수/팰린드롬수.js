const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let i = 0;
while (true) {
  let str = input[i];
  if (str === "0") break;
  let bool = true;
  let len = str.length % 2 === 0 ? str.length / 2 - 1 : (str.length - 1) / 2 - 1;
  for (let j = 0; j <= len; j++) {
    if (str[j] !== str[str.length - 1 - j]) {
      bool = false;
      break;
    }
  }
  if (bool) console.log("yes");
  else console.log("no");
  i++;
}