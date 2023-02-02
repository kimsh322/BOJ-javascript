function solution(n) {
    let num=0;
    for(let i=1; n>= i*(i+1)/2 ; i++){
        for(let j=n; j>=n/i ; j--){
            if(n === i*(j-(i-1)/2)){
                num++
                break;
            }
        }
    }
    return num;
}