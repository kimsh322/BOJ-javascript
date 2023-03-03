const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let i = 0;
let result = "";
while (true) {
  let str = input[i];
  if (str[0] === ".") break;
  let bool = true;
  let temp = [];
  for (let j = 0; j < str.length; j++) {
    if (str[j] === "(") {
      temp.push("small");
    }
    if (str[j] === ")") {
      if (temp[temp.length - 1] !== "small") {
        bool = false;
        break;
      }
      temp.pop();
    }
    if (str[j] === "[") {
      temp.push("large");
    }
    if (str[j] === "]") {
      if (temp[temp.length - 1] !== "large") {
        bool = false;
        break;
      }
      temp.pop();
    }
  }
  if (temp.length !== 0) bool = false;
  if (bool) result += "yes" + "\n";
  else result += "no" + "\n";
  i++;
}
console.log(result);