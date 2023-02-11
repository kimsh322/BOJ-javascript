const a = +require('fs').readFileSync('/dev/stdin').toString();
let b = Math.floor((a - 2) / 6);
// 0이면 2, 1,2면 3, 3,4,5면 4, 6789면 5
if (b < 0) console.log(1);
else {
  let result = 0;
  let i = 1;
  while (true) {
    result += i;
    if (b < result) {
      console.log(i + 1);
      break;
    }
    i++;
  }
}