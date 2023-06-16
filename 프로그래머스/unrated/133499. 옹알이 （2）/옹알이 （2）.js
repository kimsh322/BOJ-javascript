function solution(babbling) {
    const map = new Map();
    map.set('aya',1).set('ye',2).set('woo',3).set('ma',4);
    let result = 0;
    for(let cur of babbling){
        let leng = cur.length
        while(true){
            for(let el of map){
                cur = cur.replace(el[0],el[1]);
            }
            if(leng === cur.length) break;
            leng = cur.length;
        }
        if(!Number.isNaN(+cur)){
            let bool = true;
            for(let i=0; i<cur.length-1; i++){
                if(cur[i] === cur[i+1]) bool =false;
            }
            if(bool) result++;
        } 
    }
    return result;
}