function solution(k, tangerine) {
    let obj = {};
    for(let el of tangerine) {
        if(obj[el]) obj[el]++;
        else obj[el]=1;
    }
    let arr = [];
    for(let key in obj) arr.push(obj[key]);
    arr.sort((a,b) => b-a);
    let num=0;
    for(let i=0; i<arr.length; i++){
        if(k<=0) break;
        k = k-arr[i];
        num++
    }
    return num;
}