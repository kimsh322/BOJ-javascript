function solution(msg) {
   const hash = {'A' : 1, 'B' : 2, "C" : 3, 'D' : 4, 'E' : 5, 'F' : 6, "G" : 7, 'H' : 8, 'I' : 9, 'J' : 10, 'K' : 11, 'L' : 12, 'M' : 13, 'N' : 14, 'O' : 15,'P' : 16, 'Q' : 17, 'R' : 18, 'S' : 19, 'T' : 20, 'U' : 21,'V' : 22, 'W' : 23, 'X' : 24, 'Y' : 25, 'Z' : 26};
    let maxKey = 1;
    let curIndex = 27;
    let arr = msg.split('');
    let result = [];
    while(arr.length){
        let cur = arr.slice(0,maxKey);
        while(true){
            if(cur.join('') in hash) break;
            cur.pop();
        }
        let leng = cur.length;
        result.push(hash[cur.join('')]);
        hash[arr.slice(0,leng+1).join('')] = curIndex++;
        maxKey = Math.max(maxKey,leng+1);
        arr.splice(0,leng);
    }
    return result;
}