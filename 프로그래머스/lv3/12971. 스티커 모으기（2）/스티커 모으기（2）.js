function solution(sticker) {
    const n = sticker.length;
    if(n===1) return sticker[0];
    const dp1 = [...sticker];
    dp1.shift();
    sticker.pop();
    dp1[1] = Math.max(dp1[0],dp1[1]);
    sticker[1] = Math.max(sticker[0],sticker[1]);
    for(let i=2; i<n-1; i++) {
        dp1[i] = Math.max(dp1[i-1],dp1[i-2]+dp1[i]);
        sticker[i] = Math.max(sticker[i-1],sticker[i-2]+sticker[i]);
    }
    
    return Math.max(dp1[n-2],sticker[n-2]);
}