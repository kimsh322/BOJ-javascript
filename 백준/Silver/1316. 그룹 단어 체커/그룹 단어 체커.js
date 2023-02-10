const a = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let result = 0;
for (let i = 1; i <= a[0]; i++) {
  let obj = {};
  let bool = true;
  for (let j = 0; j < a[i].length; j++) {
    if (!(a[i][j] in obj)) {
      obj[a[i][j]] = 1;
    } else {
      if (a[i][j] !== a[i][j - 1]) bool = false;
    }
  }
  if (bool) result++;
}
console.log(result);