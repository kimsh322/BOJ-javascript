function solution(n, t, m, p) {
    const maxNum = t * m ;
    let para = '' ;
    let i = 0 ;
    while(para.length<=maxNum) {
        para += String(i.toString(n)).toUpperCase() ;
        i++
    }
    let result = '' ;
    for(let j=0; j<t; j++){
        result += para[p-1 + j*m];
    }
    return result;
}