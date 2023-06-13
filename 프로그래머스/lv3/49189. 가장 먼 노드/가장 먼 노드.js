function solution(n, edge) {
    let adjList = Array(n+1).fill(0).map(() => []);
    for(let el of edge){
        let [a,b] = el;
        adjList[a].push(b);
        adjList[b].push(a);
    }
    const visited = Array(n+1).fill(false);
    let queue = [[1,0]];
    visited[1] = true;
    let leng = Array(n+1).fill(0);
    while(queue.length){
        let [cur,curDist] = queue.shift();
        for(let el of adjList[cur]){
            if(visited[el]) continue;
            visited[el] = true;
            queue.push([el,curDist+1]);
        }
        leng[cur] = curDist;
    }
    let max = Math.max(...leng);
    let result = 0;
    for(let el of leng) {
        if(el ===max) result++;
    }
    return result;
}