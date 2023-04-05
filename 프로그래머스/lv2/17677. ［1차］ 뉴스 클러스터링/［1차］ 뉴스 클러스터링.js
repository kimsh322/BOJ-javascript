function solution(str1, str2) {
    let arr1 = {}
    let arr2 = {};
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const isAlpha = (s) => {
        return alpha.includes(s);
    }
    for(let i=0; i<str1.length-1; i++){
        let s1 = str1[i].toLowerCase();
        let s2 = str1[i+1].toLowerCase();
        if(isAlpha(s1) && isAlpha(s2)){
            if(arr1[s1+s2]) arr1[s1+s2]++;
            else arr1[s1+s2] = 1;
        }
    }
    for(let i=0; i<str2.length-1; i++){
        let s1 = str2[i].toLowerCase();
        let s2 = str2[i+1].toLowerCase();
         if(isAlpha(s1) && isAlpha(s2)){
            if(arr2[s1+s2]) arr2[s1+s2]++;
            else arr2[s1+s2] = 1;
        }
    }
    
    let interSet = {}
    let sumSet = {}
    for(let key in arr1){
        if(key in arr2) interSet[key] = Math.min(arr1[key],arr2[key]);
        sumSet[key] = arr1[key];
    }
    for(let key in arr2){
        if(sumSet[key]) sumSet[key] = Math.max(sumSet[key],arr2[key]);
        else sumSet[key] = arr2[key];
    }
    let interLeng = 0;
    let sumLeng = 0;
    for (let key in interSet) interLeng += interSet[key];
    for (let key in sumSet) sumLeng += sumSet[key];
    if(interLeng ===0 && sumLeng === 0) return 65536;
    else return Math.floor(interLeng/sumLeng * 65536);
    
}