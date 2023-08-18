function solution(m, n, puddles) {
    const dp = Array(n).fill(0).map(() => Array(m).fill(0));
    for(let [a,b] of puddles) dp[b-1][a-1] = -1;
    for(let i=0; i<n; i++) {
        if(dp[i][0] === -1) break;
        dp[i][0] = 1;
    }
    for(let i=0; i<m; i++) {
        if(dp[0][i] === -1) break;
        dp[0][i] = 1;
    }
    for(let i=1; i<n; i++){
        for(let j=1; j<m; j++) {
            if(dp[i][j] === -1) continue;
            const a = dp[i-1][j] === -1 ? 0 : dp[i-1][j];
            const b = dp[i][j-1] === -1 ? 0 : dp[i][j-1];
            dp[i][j] = a + b % 1000000007
        }
    }

    return dp[n-1][m-1] % 1000000007
}