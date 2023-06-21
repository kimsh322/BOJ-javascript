function solution(s) {
    let result = 0;
    while(s.length){
        let curStr = s[0];
        let curNum = 1;
        let otherNum=0;
        let i=1;
        while(i<s.length && curNum !== otherNum){
            if(s[i] === curStr) curNum++;
            else otherNum++;
            i++;
        }
        s = s.substring(i);
        result++;
    }
    return result;
}