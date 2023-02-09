const a = require('fs').readFileSync('/dev/stdin').toString().trim().split("");
let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let result = 0;
for (let el of a) {
    let b = alpha.indexOf(el);
    if(b<15) result += parseInt(b / 3) + 3;
    else if(b>=15 && b<19) result += 8;
    else if(b>=19 && b<22) result += 9;
    else  result += 10;
}
console.log(result);