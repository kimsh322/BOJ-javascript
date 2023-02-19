const a = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = a.split('');
for(let i=0; i<arr.length;i++){
    if(arr[i].toUpperCase()=== arr[i]) {
        arr[i] = arr[i].toLowerCase();
    } else{
        arr[i] = arr[i].toUpperCase();
    }
}
console.log(arr.join(''))