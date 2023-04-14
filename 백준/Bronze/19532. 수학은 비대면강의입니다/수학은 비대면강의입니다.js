const [a, b, c, d, e, f] = require("fs").readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
const func = () => {
  for (let i = -999; i <= 999; i++) {
    for (let j = -999; j <= 999; j++) {
      let first = a * i + b * j;
      let second = d * i + e * j;
      if (first === c && second === f) {
        console.log(i, j);
        return;
      }
    }
  }
};
func();