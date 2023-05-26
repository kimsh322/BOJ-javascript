function solution(maps) {
    let queue = [[0,0,1]];
    let dx = [0,0,1,-1];
    let dy = [1,-1,0,0];
    let n = maps.length;
    let m = maps[0].length;
    let visited = Array(n).fill(0).map(() => Array(m).fill(false));
    visited[0][0] = true;
    let min = 10001 ;
    while(queue.length){
        let [x,y,num] = queue.shift();
        if(x===m-1 && y===n-1) min = Math.min(min,num);
        for(let i=0; i<4; i++){
            let curX = x + dx[i];
            let curY = y + dy[i];
            if(curX>=0 && curX<m && curY>=0 && curY<n){
                if(!visited[curY][curX] && maps[curY][curX]){
                    visited[curY][curX] = true;
                    queue.push([curX,curY,num+1]);
                }
            }
        }
    }
    if(min === 10001) return -1;
    return min;
}