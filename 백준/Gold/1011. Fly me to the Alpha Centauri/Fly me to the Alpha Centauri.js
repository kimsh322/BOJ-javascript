const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = +input[0];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ");

  const dist = y - x;
  let a = 0;

  while (true) {
    if (dist <= a * (a + 1)) break;
    a++;
  }

  if (dist <= a * a) console.log(a * 2 - 1);
  else console.log(a * 2);
}