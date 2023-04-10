function solution(numbers, target) {
    let result =0;
  const dfs = (cur,curNum) => {
      if(curNum===numbers.length && cur===target) result++;
      if(curNum>=numbers.length) return;
      dfs(cur-numbers[curNum],curNum+1);
      dfs(cur+numbers[curNum],curNum+1);
  }
  dfs(0,0);
  return result;
}