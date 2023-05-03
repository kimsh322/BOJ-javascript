const [a,b] = require("fs").readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
const gcd = (x,y) => {
  if(x%y===0) return y;
  return gcd(y,x%y);
}
console.log(a * b /gcd(a,b));