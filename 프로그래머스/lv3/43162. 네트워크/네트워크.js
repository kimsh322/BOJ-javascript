function solution(n, computers) {
    let visited = Array(n).fill(0);
    const dfs = (num) => {
        visited[num] = 1;
        for(let i=0; i<n; i++){
            if(visited[i]) continue;
            if(computers[num][i]) dfs(i);
        }
    }
    let result = 0;
    for(let i=0; i<n; i++){
        if(visited[i]) continue;
        dfs(i);
        result++;
    }
    return result;
}