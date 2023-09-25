function solution(user_id, banned_id) {
    const leng = banned_id.length;
    const check = (id,banned) => {
        if(id.length !== banned.length) return false;
        for(let i=0; i<id.length; i++) {
            if(banned[i] === '*') continue;
            if(id[i] !== banned[i]) return false;
        }
        return true;
    }
    
    const visited = Array(user_id.length).fill(false);
    const allSet = new Set();
    const curSet = new Set();
    
    const tracking = (set,n) => {
        if(n === leng) {
            const arr = Array.from(set);
            allSet.add(arr.sort().join(' '));
            return;
        }
        for(let i=0; i<user_id.length; i++) {
            if(set.has(user_id[i])) continue;
            if(check(user_id[i],banned_id[n])) {
                set.add(user_id[i]);
                tracking(set, n + 1);
                set.delete(user_id[i]);
            }
        }
    }
    tracking(curSet,0);
    
    return allSet.size;
    
}