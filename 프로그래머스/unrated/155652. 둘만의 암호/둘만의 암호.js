function solution(s, skip, index) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const obj = {};
    let result = '';
    
    function getAl (al) {
        let alIndex = alpha.indexOf(al);
        let count = index;
        while(count>0) {
            alIndex = alIndex >= 25 ? 0 : alIndex+1;
            const cur = alpha[alIndex];
            if(skip.includes(cur)) continue;
            count--;
        }
        return alpha[alIndex];
    }
    
    for(const el of s) {
        if(el in obj) result += obj[el];
        else result += getAl(el);
    }
    return result;
}