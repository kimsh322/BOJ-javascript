function solution(s) {
    let a = s.split('}');
    let tuple=[]
    for(let i=0; i<a.length-2;i++){
        tuple.push(a[i].slice(2).split(',').map(Number))
    }
   tuple.sort((a,b) => a.length-b.length);
    let result = [];
    for(let el of tuple){
        for(let el2 of el){
           if(result.indexOf(el2) ===-1){
               result.push(el2);
               break;
           } 
        }
    }
    return result;
}