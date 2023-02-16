let a = +require('fs').readFileSync('/dev/stdin').toString();
let i = 0;
if (a % 5 === 0) console.log(a / 5);
else {
  while (a >= 3) {
    a -= 3;
    i++;
    if (a % 5 === 0) {
      i += a / 5;
      console.log(i);
      break;
    } else if (a === 0) {
      console.log(i);
      break;
    } else if (a === 1 || a === 2) {
      console.log(-1);
    }
  }
}