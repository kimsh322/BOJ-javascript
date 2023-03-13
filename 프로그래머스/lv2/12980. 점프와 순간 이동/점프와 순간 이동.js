function solution(n){
    let num=0;
    for(let i=n; i>0;){
        if(i % 2 === 0) i /= 2;
        else {
            i--;
            num++;
        }
    }
    return num;
}