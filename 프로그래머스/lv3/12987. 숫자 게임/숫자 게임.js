function solution(A, B) {
    const n = A.length
    A.sort((a,b) => b-a);
    B.sort((a,b) => a-b);
    let result = 0;
    let i=0;
    while(i<n){
        const cur = A[i];
        if(A[i] >= B[B.length-1]) B.shift();
        else {
            B.pop();
            result++;
        }
        i++
    }
    return result;
}