const input = +require("fs").readFileSync('/dev/stdin').toString().trim();
const func = (n, start, end) => {
  // base case
  if (n === 1) return (result += `${start} ${end}\n`);
  // n-1을 옆칸으로 옮김
  func(n - 1, start, 6 - start - end);
  // 제일 밑 원판  end로 옮김
  result += `${start} ${end}\n`;
  // 다시 n-1을 제일 밑원판 위에 쌓음
  func(n - 1, 6 - start - end, end);
};
let result = "";
result += Math.pow(2, input) - 1 + "\n";
func(input, 1, 3);
console.log(result);