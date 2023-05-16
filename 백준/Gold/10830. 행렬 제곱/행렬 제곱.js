const [a,...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const [n,b] = a.split(' ').map(Number);
const matrix = [];
for(let i=0; i<n; i++) matrix.push(input[i].split(' ').map(Number));
const dp = [matrix];
const multiple = (a,b) => {
    const arr = [];
    for(let i=0; i<n; i++){
        const row = [];
        for(let j=0; j<n;j++){
            let sum=0;
            for(let k=0; k<n; k++){
                sum += a[i][k] * b[k][j] % 1000;
            }
            row.push(sum %1000);
        }
        arr.push(row);
    }
    return arr;
}

for(let i=1; i<=Math.log2(b);i++) {
    dp[i] = multiple(dp[i-1],dp[i-1]);
}
const str = b.toString(2).split('').reverse().join('');
let result=[];
for(let i=0 ;i<n; i++){
    let row = Array(n).fill(0);
    row[i] = 1;
    result.push(row);
}

for(let i=0; i<str.length; i++){
  if(str[i] === '1')  result = multiple(result,dp[i]);
}
let output = '';
for(let i=0; i<n; i++){
    output += result[i].join(' ') + '\n';
}
console.log(output);