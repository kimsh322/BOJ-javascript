function solution(dirs) {
    let set = new Set();
    const current = [0,0];
    for(let el of dirs) {
        let path = [...current];
        if(el === 'U' && current[1] < 5) current[1]++ ;  
        else if(el === 'D' && current[1] > -5) current[1]-- ;   
        else if(el === 'R' && current[0] < 5) current[0]++ ;   
        else if(el === 'L' && current[0] > -5) current[0]-- ; 
        else continue;
        let revPath = [...current,...path] ;
        path.push(...current);
        set.add(path.join('')).add(revPath.join(''));
    }
    return set.size / 2 ;
}