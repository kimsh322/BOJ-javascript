function solution(elements) {
    let arr = [...elements,...elements];
    let set = new Set(elements);
    for(let i=2; i<=elements.length;i++){
        for(let j=0; j<elements.length;j++){
            let sum=0;
            for(let k=j;k<j+i;k++){
                sum += arr[k];
            }
            set.add(sum);
        }
    }
    return set.size;
}