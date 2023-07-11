function solution(gems) {
    const set = new Set(gems);
    const gemNum = set.size;
    const arr = [];
    let cur=0;
    while(cur < gems.length) {
        const map = new Map();
        let min = 100001;
        let max = 0;
        for(let i=cur; i<gems.length; i++){
            map.set(gems[i],i+1);
            if(map.size === gemNum) {
                max = i+1;
                break;
            }
        }
        if(max === 0) break;
        for(const value of map.values()) {
            min = Math.min(min,value);
        }
        arr.push([min,max]);
        cur = min+1;
    }
    
    const sub = arr.map(el => Math.abs(el[0] - el[1]));
    const min = Math.min(...sub);
    const idx = sub.indexOf(min);
    
    return arr[idx];
}