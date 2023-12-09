function solution(storey) {
    let result = 0;
    const a = String(storey).split('').reverse();
    a.push('0');
    for(let i=0; i<a.length; i++) {
        if(+a[i] === 10) a[i+1] = +a[i+1]+1;
        else if(+a[i] <5) result += +a[i];
        else if(+a[i] === 5 && +a[i+1] <5) result += +a[i];
        else {
            result += 10 - +a[i];
            a[i+1] = +a[i+1]+1;
        }
    }
    return result;
}