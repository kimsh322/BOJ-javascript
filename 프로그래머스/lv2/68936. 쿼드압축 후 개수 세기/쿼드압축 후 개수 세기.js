function solution(arr) {
    const n = arr.length;
    let zero = 0;
    let one = 0;
    const check = (x,y,size) => {
        const cur = arr[y][x];
        for(let i=y; i< y+size; i++){
            for(let j=x; j<x+size; j++){
                if(arr[i][j] !== cur) return false;
            }
        }
        return true;
    }
    
    const func = (x,y,a) => {
        if(a === 1) {
            arr[y][x] === 1 ? one++ : zero++
        }
        for(let i=0; i<2; i++) {
            for(let j=0; j<2; j++) {
                let nextSize = a / 2;
                let nextX = x+i * nextSize;
                let nextY = y+j * nextSize;
                if(check(nextX,nextY, nextSize)) {
                    arr[nextY][nextX] === 1 ? one++ : zero++
                } 
                else func(nextX,nextY, nextSize)
            }
        }
    }
    if(check(0,0,n)) {
        arr[0][0] === 1 ? one++ : zero++
    }
    else func(0,0,n);
    return [zero,one];
}