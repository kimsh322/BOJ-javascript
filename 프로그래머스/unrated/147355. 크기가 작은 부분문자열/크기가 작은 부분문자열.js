function solution(t, p) {
    let leng = p.length;
    let result = 0;
    for(let i=0; i<t.length-leng+1; i++){
        let str =''
        for(let j=0; j<leng;j++) str += t[i+j];
        if(str<=p) result++;
    }
    return result;
}