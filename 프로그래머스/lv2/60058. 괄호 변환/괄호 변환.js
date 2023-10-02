function solution(p) {
    
    const check = (str) => {
        let count = 0;
        for(let i=0; i<str.length; i++) {
            if(str[i] === '(') count++;
            if(str[i] === ')') count--;
            if(count <0) return false;
        }
        if(count !==0) return false;
        return true;
    }
    
    if(p === '') return '';
    let count = 0;
    let u = '';
    let v = '';
    for(let i=0; i<p.length; i++) {
        if(p[i] === '(') count++;
        if(p[i] === ')') count--;
        if(count === 0) {
            u = p.substring(0,i+1);
            v = p.substring(i+1);
            break;
        }
    }

    if(check(u)) return u + solution(v);
    else {
        let newStr = '(';
        newStr += solution(v);
        newStr += ')'
        const arr = u.substring(1,u.length-1).split('');
        for(let i=0; i<arr.length; i++) {
            if(arr[i] === '(') arr[i] = ')';
            else arr[i] = '('
        }
        newStr += arr.join('');
        return newStr;
    }
}