function solution(n, m, section) {
    let visited = Array(n).fill(true);
    for(let el of section) visited[el] = false;
    let result = 0;
    for(let el of section) {
        if(visited[el]) continue;
        result++;
        for(let i=el; i<el+m; i++) visited[i] = true;
    }
    return result;
}