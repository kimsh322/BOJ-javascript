function solution(board) {
    let n = board.length
    let arr = Array(n).fill(0).map(() => Array(n).fill(0));
    let dx = [-1,-1,-1,0,0,1,1,1];
    let dy = [1,0,-1,1,-1,1,0,-1];
    const danger = (x,y) => {
        for(let i=0;i<dx.length;i++){
            let curX = x+dx[i];
            let curY = y + dy[i];
            if(curX>=0 && curX<n && curY>=0 && curY<n){
                arr[curX][curY] =1;
            }
        }
    }
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(board[i][j] === 1){
                arr[i][j] = 1;
                danger(i,j);
            }
        }
    }
    let num=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(arr[i][j]===0) num++
        }
    }
    return num;
}