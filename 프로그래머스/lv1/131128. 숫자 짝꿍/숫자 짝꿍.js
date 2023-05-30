function solution(X, Y) {
    let obj = {};
    for(let el of X) {
        if(el in obj) obj[el]++;
        else obj[el] = 1;
    }
    let arr = [];
    for(let el of Y){
        if(el in obj){
            if(obj[el] === 1) delete obj[el];
            else obj[el]--;
            arr.push(+el);
        }
    }
    if(!arr.length) return '-1';
    if(!Number(arr.join(''))) return '0';
    arr.sort((a,b) => b-a);
    return arr.join('');
}