function solution(board, moves) {
    const n = board.length;
    const pickFunc = (col) => {
        let pick = 0;
        for(let i=0; i<n; i++){
            if(board[i][col-1] !== 0) {
                pick = board[i][col-1];
                board[i][col-1] = 0;
                break;
            }
        }
        return pick;
    }
    
    const stack = [];
    let count=0;
    for(let i=0; i<moves.length; i++) {
        const cur = pickFunc(moves[i]);
        if(cur === 0) continue;
        if(stack.length && stack[stack.length-1] === cur) {
            stack.pop();
            count+= 2;
        } else stack.push(cur);
    }
    return count;
}