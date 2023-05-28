function solution(begin, target, words) {
    const callback = (str1,str2) => {
        let num = 0;
        for(let i=0; i<str1.length; i++){
            if(str1[i] !== str2[i]) num++;
        }
        return num === 1 ;
    }
   let queue = [[begin,0]];
    let visited = Array(words.length).fill(false);
    while(queue.length) {
        let [cur,num] = queue.shift();
        if(cur===target) return num;
        if(num >50) return 0;
        for(let i=0; i<words.length; i++) {
            if(callback(cur,words[i]) && !visited[i]) {
                visited[i] = true;
                queue.push([words[i],num+1]);
            }
        }
    }
    return 0;
}