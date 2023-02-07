const a = require('fs').readFileSync('/dev/stdin').toString().trim();
const alp = 'abcdefghijklmnopqrstuvwxyz';
let arr=[]
for(let el of alp){
    arr.push(a.indexOf(el));
};
console.log(arr.join(' '))