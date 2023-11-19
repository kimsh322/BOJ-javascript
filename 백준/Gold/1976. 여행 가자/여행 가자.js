const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [n,m,...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const parent = [];
for(let i=0; i<=n; i++) parent.push(i)
const findRoot = (a) => {
    if(parent[a] !== a) parent[a] = findRoot(parent[a]);
    return parent[a]
}

const compareRoot = (a,b) => {
    return findRoot(a) === findRoot(b);
}

const union = (a,b) => {
    const A = findRoot(a);
    const B = findRoot(b);
    if(A < B) parent[B] = A;
    else parent[A] = B;
}

for(let i=0; i<n; i++) {
    const arr = [0,...input[i].split(' ').map(Number)];
    arr.forEach((el,idx) => {
        if(el === 1 && !compareRoot(i+1,idx)) union(i+1,idx);
    })
}

const path = input[+n].split(' ');
const root = findRoot(path[0]);
let isYes = true;
for(let i=1; i<m; i++) {
    if(findRoot(path[i]) !== root) isYes = false;
}

console.log(isYes ? 'YES' : 'NO')