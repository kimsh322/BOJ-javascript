function solution(s) {
    let i=0;
    let result = ''
    while(i<s.length){
        if(!Number.isNaN(+s[i])){
            result += s[i];
            i++
            continue;
        }
        if(s[i] === 'z'){
            result += 0;
            i += 4
        }
        if(s[i] === 'o'){
            result += 1;
            i += 3
        }
        if(s[i] === 't'){
            if(s[i+1] === 'w'){
                result += 2;
                i+=3;
            } else {
                result += 3;
                i+=5;
            }
        }
        if(s[i] === 'f'){
            if(s[i+1] === 'o'){
                result += 4;
                i+=4;
            } else {
                result += 5;
                i+=4;
            }
        }
        if(s[i] === 's'){
            if(s[i+1] === 'i'){
                result += 6;
                i+=3;
            } else {
                result += 7;
                i+=5;
            }
        }
        if(s[i] === 'e'){
            result += 8;
            i += 5
        }
        if(s[i] === 'n'){
            result += 9;
            i += 4
        }
    }
    return +result;
}