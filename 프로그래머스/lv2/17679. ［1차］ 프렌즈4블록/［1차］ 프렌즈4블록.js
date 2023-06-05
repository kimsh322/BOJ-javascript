function solution(m, n, board) {
    const arr = board.map(el => el.split(''));
    let dx = [0,1,1];
    let dy = [1,0,1];
    let result = 0;
    const func = () => {
        let temp = [];
        // 2x2 블록 찾기
        for(let i=0; i<n-1; i++){
            for(let j=0; j<m-1; j++){
                let cur = arr[j][i];
                if(cur === 0) continue;
                let bool = true;
                let temp2 = [[i,j]];
                for(let k=0; k<3; k++){
                    curX = i+dx[k];
                    curY = j+dy[k];
                    if(arr[curY][curX] !== cur) bool = false;
                    if(bool) temp2.push([curX,curY]);
                    if(!bool) break;
                }
                if(bool) temp.push(...temp2);
            }
        }
        // 블록제거, 블록숫자 세기
        for(let el of temp){
            if(arr[el[1]][el[0]] === 0) continue;
            result++;
            arr[el[1]][el[0]] = 0;
        }
        
        // 블록 내려보내기
        for(let k=0; k<m; k++){
            for(let i=0; i<n; i++){
                for(let j=0; j<m-1; j++){
                    if(arr[j+1][i] === 0) [arr[j][i],arr[j+1][i]] = [arr[j+1][i],arr[j][i]];   
                }
            }
        }
    }
    // 블록제거가 안될때까지 반복
    while(true){
        let tempVal = result;
        func();
        if(tempVal === result) break;
    }
    return result;
}