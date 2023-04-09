function solution(N, stages) {
    let obj = {};
    for(let el of stages){
        if(obj[el]) obj[el]++
        else obj[el] = 1;
    }
    let arr = Array(N+1).fill(0);
    for(let i=1; i<N+1; i++){
        let total = 0;
        let cur = 0;
        for(let key in obj){
            if(+key===i) cur+= obj[key];
            if(+key>=i) total += obj[key];
        }
        if(total === 0 ) arr[i]=0;
        else arr[i] = cur/total;
    }
    arr.shift();
    let result = [];
    let arr2 = [];
    for(let i=0; i<arr.length; i++){
        arr2.push([i+1,arr[i]]);
    }
    while(result.length<N){
        let max = Math.max(...arr);
        let idx =-1;
        result.push(arr2.find((el,index) => {
            if(el[1] === max){
                idx = index;
                return true;
            }
            return false;
        })[0]);
        arr.splice(arr.indexOf(Math.max(...arr)),1);
        arr2.splice(idx,1);
    }
    return result;
}