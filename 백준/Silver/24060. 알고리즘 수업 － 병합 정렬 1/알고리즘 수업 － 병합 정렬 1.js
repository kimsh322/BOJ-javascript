const [a, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let [n, k] = a.split(" ").map(Number);
let arr = input.split(" ").map(Number);
let answerArr = [];
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] <= arr1[i]) {
      results.push(arr2[j]);
      j++;
    } else {
      results.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  answerArr.push(...results);
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort(arr);

if (answerArr.length < k) console.log(-1);
else console.log(answerArr[k - 1]);
