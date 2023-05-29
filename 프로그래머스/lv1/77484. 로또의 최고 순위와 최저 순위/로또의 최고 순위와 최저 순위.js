function solution(lottos, win_nums) {
    let zero = 0;
    let correct = 0;
    for(let i=0; i<6; i++){
        if(lottos[i] === 0) zero++;
        if(win_nums.includes(lottos[i])) correct++;
    }
    let min = 7 - correct;
    if(min>6) min=6 ;
    let max = 7- (correct+zero);
    if(max>6) max=6 ;
    return [max,min];
}