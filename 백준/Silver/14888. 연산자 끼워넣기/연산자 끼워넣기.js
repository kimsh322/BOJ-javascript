const [n,a,o] = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
let arrA = a.split(' ').map(Number);
let temp = o.split(' ').map(Number);
let operatorSet = '';
for(let j=0; j<temp.length; j++){
    for(let i=0; i<temp[j]; i++) operatorSet += j;
}
let arr = new Set();
let newArr = [];
let visited = Array(operatorSet.length).fill(false);
const func = (num) => {
    if(num>=n-1) {
        arr.add(newArr.join(''));
        return;
    }
    for(let i=0; i<n-1 ;i++){
        if(visited[i]) continue;
        visited[i] = true;
        newArr.push(operatorSet[i]);
        func(num+1);
        newArr.pop();
        visited[i] = false;
    }
}
func(0);

const operatorFunc = (a,b,str) => {
    if(str === '0') return a+b;
    if(str === '1') return a-b;
    if(str === '2') return a*b;
    if(str === '3') {
        let divide = Math.floor(Math.abs(a)/b);
        return a<0 ? -divide : divide;
    }
}
let result = []
for(let curOperator of arr){
    let a = arrA[0]
    for(let i=1; i<n; i++){
        let b = arrA[i];
        a = operatorFunc(a,b,curOperator[i-1]);
    }
    result.push(a);
}
let max = Math.max(...result);
let min = Math.min(...result);
console.log(max === 0 ? 0 : max);
console.log(min === 0 ? 0 : min);