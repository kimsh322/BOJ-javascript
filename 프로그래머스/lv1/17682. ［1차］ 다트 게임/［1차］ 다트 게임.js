function solution(dartResult) {
    dartResult = dartResult.split('');
    let arr = [];
    let i=0;
    while(dartResult.length){
        let cur = dartResult[i];
        if(i === dartResult.length-1) {
            arr.push(dartResult.join(''));
            break;
        }
        if(cur === 'D' || cur === 'S' || cur === 'T' || cur === '#' || cur === '*'){
            if(!isNaN(+dartResult[i+1])){
                arr.push(dartResult.splice(0,i+1).join(''));
                i=-1;
            }
        }
        i++
    }
    let result = [0,0,0];
    for(let i=0;i<3;i++){
        let cur = +arr[i][0];
        let idx=1;
        if(arr[i][1] === '0') {
            cur=10;
            idx++
        }
        if(arr[i][idx] === 'D') cur = cur ** 2;
        if(arr[i][idx] === 'T') cur = cur ** 3;
        if(arr[i][idx+1] === '*'){
            cur *=2;
            if(i>0) result[i-1] *= 2;
        }
        if(arr[i][idx+1] === '#') cur *= -1;
        result[i] = cur;
    }
    return result.reduce((a,el) => a+el);
}