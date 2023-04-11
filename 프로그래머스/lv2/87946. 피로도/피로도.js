function solution(k, dungeons) {
    const func = (arr,curK) => {
        let num=0;
        for(let i=0; i<dungeons.length; i++){
            if(curK<=0) break;
            if(arr[i][0]>curK) continue;
            curK -=arr[i][1];
            num++
        }
        return num;
    }
    let leng = dungeons.length;
    let visited = Array(leng).fill(0);
    let arr = [];
    let newArr = []
    const func2 = (num) => {
        if(num >= leng){
            return newArr.push([...arr]);
        }
        for(let i=0;i<leng;i++){
            if(visited[i]) continue;
            visited[i] =1;
            arr[num] = dungeons[i];
            func2(num+1);
            visited[i] =0;
        }
    }
    func2(0);
    let max = 0;
    for(let el of newArr){
        max = Math.max(max,func(el,k));
    }
    return max
}
