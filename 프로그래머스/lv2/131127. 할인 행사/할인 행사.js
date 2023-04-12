function solution(want, number, discount) {
    let obj = {};
    let result=0;
    for(let i=0; i<want.length;i++){
         obj[want[i]] =number[i];
    }
    for(let i=0; i<discount.length-9;i++){
        let obj2 = {...obj}
        for(let j=i;j<i+10;j++){
            if(discount[j] in obj2){
               if(obj2[discount[j]]===1) delete obj2[discount[j]]
                else obj2[discount[j]]--;
            } 
        }
        if(Object.keys(obj2).length ===0) result++;
    }
    return result;
}