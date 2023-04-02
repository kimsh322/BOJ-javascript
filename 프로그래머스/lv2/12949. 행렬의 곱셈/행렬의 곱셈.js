function solution(arr1, arr2) {
    let n = arr1.length
    let m = arr2[0].length
    let result = Array(n).fill(0).map(() => []);
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            result[i].push(arr1[i].reduce((a,el,idx) =>{
               return a+el*arr2[idx][j] ;
            },0))
        }
    }
    return result;
}