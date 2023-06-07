function solution(n, lost, reserve) {
    let set = new Set();
    for(let i=1; i<=n; i++){
        if(lost.includes(i)) continue;
        set.add(i);
    }
    reserve.sort((a,b) => a-b)
    for(let i=0; i<reserve.length; i++){
        if(!set.has(reserve[i])) {
            set.add(reserve[i]);
            reserve[i] = 100;
        }
    }
    console.log(set,reserve)
    for(let el of reserve){
        if(el === 100) continue;
        if(el>1 && !set.has(el-1)) set.add(el-1);
        else if(el<n && !set.has(el+1)) set.add(el+1);
    }
    console.log(set)
    return set.size
}