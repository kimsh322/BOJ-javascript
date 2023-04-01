function solution(cacheSize, cities) {
    let cache=[];
    let result=0;
    for(let i=0; i<cities.length; i++){
        let idx = cache.indexOf(cities[i].toUpperCase())
        if(idx !== -1) {
            result++;
            cache.splice(idx,1);
            cache.push(cities[i].toUpperCase());
        }
        else {
            result +=5;   
            cache.push(cities[i].toUpperCase()); 
            if(cache.length > cacheSize) cache.shift();
        }
    }
    return result;
}