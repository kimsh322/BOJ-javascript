function solution(sizes) {
    let max=0;
    let min=0;
    for(let el of sizes){
        el.sort((a,b) => b-a);
        if(el[0]>max) max = el[0];
        if(el[1]>min) min = el[1];
    }
    return max*min;
}