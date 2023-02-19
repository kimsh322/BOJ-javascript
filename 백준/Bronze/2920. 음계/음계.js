const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map((el) => +el);
let asc = true;
let des = true;
for (let i = 1; i <= 8; i++) {
  if (input[i - 1] !== i) asc = false;
  if (input[i - 1] !== 9 - i) des = false;
}
if (asc) console.log("ascending");
else if (des) console.log("descending");
else console.log("mixed");