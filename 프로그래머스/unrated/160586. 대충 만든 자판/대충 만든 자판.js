function solution(keymap, targets) {
    const obj = {};
    const callback = (target) => {
        let count = 0;
        for(let al of target) {
            if(al in obj) count += obj[al];
            else {
                let min = 102;
                for(let el of keymap) {
                    let idx = el.indexOf(al);
                    if(idx !== -1) {
                        min = Math.min(min, idx+1);
                    }
                }
                if(min !== 102) {
                    obj[al] = min;
                    count += min;
                } else return -1;
            }
        }
        if(count === 0) return -1;
        return count;
    }
    return targets.map(callback);
}