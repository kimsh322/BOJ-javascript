function solution(phone_book) {
    const obj = {};
    for(let el of phone_book) obj[el] = true;
    
    for(let el of phone_book) {
        let cur = '';
        for(let i=0; i<el.length; i++) {
            cur += el[i];
            if(obj[cur] && i !== el.length-1) return false;
        }
    }
    return true;
}