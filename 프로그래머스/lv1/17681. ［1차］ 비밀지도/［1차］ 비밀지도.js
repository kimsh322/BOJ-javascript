function solution(n, arr1, arr2) {
    let one = arr1.map(el => {
  let str = '' + el.toString(2);
  while(str.length<n) {
    str = '0'+str 
  }
  return str
});
let two = arr2.map(el => {
  let str = '' + el.toString(2);
  while(str.length<n) {
    str = '0'+str 
  }
  return str
  });
let result =[]
for(let i=0; i<n;i++){
    let oneArr = one[i].split('')
    let twoArr = two[i].split('')
    let resultArr = []
    for(let j=0; j<n; j++){
        if(oneArr[j]==='1' || twoArr[j] === '1') resultArr.push('#');
        else resultArr.push(' ');
    }
    result.push(resultArr.join(''))
}
    return result
}