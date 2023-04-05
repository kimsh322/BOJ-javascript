function solution(nums) {
    let arr = [2];
    let result=0;
    for(let i=3; i<3000; i+=2){
        let bool = true;
        for(let j=3; j<=Math.sqrt(i);j++){
            if(i%j===0) {
                bool=false;
                break;
            }
        }
        if(bool) arr.push(i);
    }
    for(let i=0; i<nums.length-2;i++){
        for(let j=i+1; j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                let num = nums[i]+nums[j]+nums[k];
                if(arr.includes(num)) result++;
            }
        }
    }
    return result;
}