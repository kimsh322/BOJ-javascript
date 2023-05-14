const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
let table = [];
for(let i=0; i<n; i++) {
  table.push(input[i].split(' ').map(Number));
}
let team=[];
let newArr=[];
let visited= Array(n).fill(false);
const func = (num) =>{
    if(num===n/2) {
        team.push([...newArr]);
        return;
    }
    for(let i=num; i<n; i++){
        if(visited[i]) continue;
        for(let j=0; j<=i ; j++) visited[j] = true;
        newArr.push(i);
        func(num+1);
        newArr.pop(i);
        for(let j=0; j<=i ; j++) visited[j] = false;
    }
}
func(0);

const func2 = (arr) => {
    let sum=0;
    for(let el of arr){
        for(let el2 of arr){
            sum += table[el][el2];
        }
    }
    return sum;
}

let sum = team.map(el => func2(el));
let leng = sum.length/2;
let min = 10000;
for(let i=0; i<leng; i++){
    min = Math.min(min, Math.abs(sum[i] - sum[sum.length-i-1]));
}
console.log(min);