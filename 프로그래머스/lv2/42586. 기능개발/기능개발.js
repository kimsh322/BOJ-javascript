function solution(progresses, speeds) {
    let arr = [];
    for(let i=0; i<speeds.length;i++){
        arr.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    let result = []
    while(arr.length){
        let num=1;
        let first = arr.shift();
        while(arr.length){
            if(first>=arr[0]) {
                arr.shift();
                num++
             } else break;
        }
        result.push(num);
    }
    return result;
}