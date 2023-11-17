const [n,...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=0; i<n; i++) {
    let left = +input[i];
    const quarter = Math.floor(left/25);
    left -= quarter * 25;
    const dime = Math.floor(left/10);
    left -= dime * 10;
    const nickel = Math.floor(left/5);
    left -= nickel * 5;
    const penny = left;
    console.log(quarter,dime,nickel,penny);
}