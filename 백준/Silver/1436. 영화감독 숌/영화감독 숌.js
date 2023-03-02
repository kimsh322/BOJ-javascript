const input = +require("fs").readFileSync('/dev/stdin').toString().trim().split(" ");
let arr = [];
for (let i = 666; i <= 3000000; i++) {
  if (String(i).indexOf("666") !== -1) arr.push(i);
}
console.log(arr[input - 1]);