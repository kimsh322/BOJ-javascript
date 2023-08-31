function solution(genres, plays) {
    const n = genres.length;
    const obj = {};
    const total = {};
    for(let i=0; i<n; i++) {
        if(genres[i] in obj) {
            obj[genres[i]].push([i,plays[i]]);
            total[genres[i]] += plays[i];
        }
        else {
            obj[genres[i]] = [[i,plays[i]]];
            total[genres[i]] = plays[i];
        }
    }
    
    const totalArr = [];
    for(let genre in total) {
        totalArr.push([genre,total[genre]]);
    }
    totalArr.sort((a,b) => b[1] - a[1]);

    const result = [];
    for(let [genre,_] of totalArr) {
        obj[genre].sort((a,b) => b[1] - a[1]);
        result.push(obj[genre][0][0]);
        if(obj[genre].length >1) result.push(obj[genre][1][0]);   
    }
    return result;
}