let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
for(let i=1; i<=input[0];i++){
    let arr = input[i].split(' ');
    let num=0;
    let avg = arr.reduce((a,el,idx) =>{
        if(!idx) return a
        return a+(+el);
    },0) / arr[0]
    for(let i=1; i<arr.length;i++){
        if(+arr[i]>avg) num++;
    }
    console.log(`${(num*100/arr[0]).toFixed(3)}%`);
}