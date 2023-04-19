const n = +require("fs").readFileSync('/dev/stdin').toString().trim();
let arr = Array(n).fill(100);
let result = 0;

const avail = (x, y) => {
  if (arr[y] !== 100) return false;
  for (let i = 0; i < n; i++) {
    if (Math.abs(x - arr[i]) === Math.abs(y - i)) return false;
  }
  return true;
};

const func = (num) => {
  if (num === n) {
    result++;
    return;
  }
  for (let i = 0; i < n; i++) {
    if (avail(num, i)) {
      arr[i] = num;
      func(num + 1);
      arr[i] = 100;
    }
  }
};
func(0);
console.log(result);