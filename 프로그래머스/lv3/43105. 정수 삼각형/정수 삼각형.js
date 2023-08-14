function solution(triangle) {
    const n = triangle.length;
    const dp = Array(n).fill(0).map((_,idx) => {
        return Array(idx+1).fill(0);
    })
    dp[0][0] = triangle[0][0];
    for(let i=1; i<n; i++) {
        for(let j=1; j<i; j++) {
            dp[i][j] = Math.max(dp[i-1][j-1],dp[i-1][j]) + triangle[i][j];
        }
        dp[i][0] = dp[i-1][0] + triangle[i][0]
        dp[i][i] = dp[i-1][i-1] + triangle[i][i]
    }
    return Math.max(...dp[n-1])
}