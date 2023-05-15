const [n,a,o] = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
let arrA = a.split(' ').map(Number);
let operatorSet = o.split(' ').map(Number);

const operatorFunc = (a,b,operator) => {
    if(operator === 0) return a+b;
    if(operator === 1) return a-b;
    if(operator === 2) return a*b;
    if(operator === 3) {
        let divide = Math.floor(Math.abs(a)/b);
        return a<0 ? -divide : divide;
    }
}
let result = []

const func = (num,sum,curOperatorSet) => {
    if(num===n-1) {
        result.push(sum);
        return;
    }
    for(let i=0; i<4; i++){
        if(curOperatorSet[i]>0) {
            curOperatorSet[i]--;
            func(num+1,operatorFunc(sum,arrA[num+1],i),curOperatorSet);
            curOperatorSet[i]++;
        }
    }
}
func(0,arrA[0],operatorSet);

let max = Math.max(...result);
let min = Math.min(...result);
console.log(max === 0 ? 0 : max);
console.log(min === 0 ? 0 : min);