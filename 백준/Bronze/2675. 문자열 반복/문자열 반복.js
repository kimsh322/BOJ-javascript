const fs = require("fs");
const a = fs.readFileSync("/dev/stdin").toString().split("\n");
for (let i = 1; i <= +a[0]; i++) {
  let arr = a[i].split(" ");
  let str = arr[1].split("");
  let result = str.map((el) => {
    let a = "";
    for (let j = 0; j < arr[0]; j++) a += el;
    return a;
  });
  console.log(result.join(""));
}