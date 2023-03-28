function solution(s) {
    let obj = {};
    let result = [];
    for(let i=0; i<s.length; i++){
        if(s[i] in obj) {
            result.push(i-obj[s[i]]);
            obj[s[i]] = i;
        } else {
            result.push(-1);
            obj[s[i]] = i;
        }
    }
    return result;
}