function solution(maps) {
    const lengY = maps.length;
    const lengX = maps[0].length;
    const visited = Array(lengY).fill(0).map(() => Array(lengX).fill(false));
    const dfs = (y,x,count) => {
        const dx = [0,0,1,-1];
        const dy = [1,-1,0,0];
        for(let i=0; i<4; i++) {
            const curX = x + dx[i];
            const curY = y + dy[i];
            if(curY <0 || curY >= lengY || curX <0 || curX >=lengX) continue;
            if(!visited[curY][curX] && maps[curY][curX] !== 'X') {
                count[0] += +maps[curY][curX];
                visited[curY][curX] = true;
                dfs(curY,curX,count);
            }
        }
    }
    
    const result = [];
    let count = [];
    for(let i=0; i< lengY; i++) {
        for(let j=0; j< lengX; j++) {
            if(!visited[i][j] && maps[i][j] !== 'X') {
                count= [+maps[i][j]];
                visited[i][j] = true;
                dfs(i,j,count);
                result.push(count[0]);
            }
        }
    }
    result.sort((a,b) => a-b);
    return result.length ? result : [-1];
}