function solution(skill, skill_trees) {
    let result = skill_trees.length;
    for(let el of skill_trees){
        let arr = skill.split('');
        let i=0;
        let bool = false;
        for(let str of el){
            if(arr.includes(str)) {
                if(arr[i] !== str){
                    bool = true;
                    break;
                }
                i++;
            }
        
        }
        if(bool) result--;
    }
    return result;
}