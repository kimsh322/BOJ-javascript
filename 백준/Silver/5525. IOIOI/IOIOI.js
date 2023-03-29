const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let p = "I" + "OI".repeat(+input[0]);
let num = 0;
for (let i = 0; i <= input[1] - p.length; i++) {
  let bool = true;
  for (let j = 0; j < p.length; j++) {
    if (p[j] !== input[2][i + j]) {
      bool = false;
      break;
    }
  }
  if (bool){
      num++;
      i++
  } 
}
console.log(num);