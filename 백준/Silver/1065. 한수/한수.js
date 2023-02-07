const fs = require('fs')
const a = +fs.readFileSync("/dev/stdin").toString().trim();
let count=99;
if(a<100) console.log(a);
else{
    for(let i=100; i<=a; i++){
        let str = i+'';
        if(str[1] - str[0] === str[2] - str[1]) count++
    }
    console.log(count);
}