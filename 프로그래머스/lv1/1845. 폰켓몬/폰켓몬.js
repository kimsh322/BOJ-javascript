function solution(nums) {
    let obj = {};
    for(let el of nums){
        if(el in obj) obj[el]++;
        else obj[el] = 1;
    }
    let n = nums.length/2;
    let maxKeys = Object.keys(obj).length;
    return Math.min(n,maxKeys)
}