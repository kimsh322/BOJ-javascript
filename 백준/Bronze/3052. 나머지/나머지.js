const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let result =[]
for(let el of input){
    if(result.indexOf(+el % 42) === -1){
        result.push(+el%42);
    }
}
console.log(result.length)