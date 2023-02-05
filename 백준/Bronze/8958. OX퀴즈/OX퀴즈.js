const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
for(let i=1; i<=input[0]; i++){
let arr = input[i].split('');
let num=0;
let result = arr.reduce((a,el) =>{
    num = el === 'O' ? num+1 : 0;
    return a+num;
},0);
console.log(result);
}