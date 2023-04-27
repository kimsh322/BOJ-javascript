function solution(cards1, cards2, goal) {
    while(goal.length){
        let cur = goal.shift();
        if(cards1[0] !== cur && cards2[0] !==cur) return 'No'
        if(cards1[0] === cur) cards1.shift();
        if(cards2[0] === cur) cards2.shift();
    }
    return 'Yes'
}