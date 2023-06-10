const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let num = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let i = 0;
let total = {};
while (i < n) {
  let curStr = input[i];
  let ten = 0;
  for (let j = curStr.length - 1; j >= 0; j--) {
    if (curStr[j] in total) total[curStr[j]] += Math.pow(10, ten);
    else total[curStr[j]] = Math.pow(10, ten);
    ten++;
  }
  i++;
}

let arr = [];
for (let key in total) {
  arr.push([key, total[key]]);
}
arr.sort((a, b) => b[1] - a[1]);
let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i][0]] = num[i];
}

const callback = (str) => {
  let ten = 0;
  let result = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    result += obj[str[i]] * Math.pow(10, ten);
    ten++;
  }
  return result;
};
let result = input.map(callback).reduce((a, el) => a + el);
console.log(result);