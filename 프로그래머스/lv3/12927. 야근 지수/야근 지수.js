function solution(n, works) {
    let total = works.reduce((a,el) => a+el)-n;
    if(total<=0) return 0;
    works.sort((a,b) => b-a);
    while(n>0){
        let max = works[0];
        for(let i=0; i<works.length;i++){
            if(works[i]>=max){
                works[i]--
                n--;
            }
            if(n===0) break;
        }
    }
    let result = works.reduce((a,el) => a+el*el,0);
    return result;
}