function solution(land) {
    if(land.length === 0) return 0;
    for(let i=1; i<land.length; i++){
        for(let j=0; j<4; j++){
            let arr = [[0,land[i-1][0]],[1,land[i-1][1]],[2,land[i-1][2]],[3,land[i-1][3]]]
            let max = 0;
            for(let el of arr){
                if(el[0] !==j) max = Math.max(max,el[1]);
            }
            land[i][j] += max;
        }
    }
    return Math.max(...land[land.length-1])
}