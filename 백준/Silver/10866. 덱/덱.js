const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let deck = [];
let result = "";
for (let i = 0; i < +a; i++) {
  let arr = input[i].split(" ");
  switch (arr[0]) {
    case "push_front":
      deck.unshift(arr[1]);
      break;
    case "push_back":
      deck.push(arr[1]);
      break;
    case "pop_front":
      if (deck.length !== 0) result += deck.shift() + "\n";
      else result += -1 + "\n";
      break;
    case "pop_back":
      if (deck.length !== 0) result += deck.pop() + "\n";
      else result += -1 + "\n";
      break;
    case "size":
      result += deck.length + "\n";
      break;
    case "empty":
      result += (deck.length === 0 ? 1 : 0) + "\n";
      break;
    case "front":
      result += (deck.length === 0 ? -1 : deck[0]) + "\n";
      break;
    case "back":
      result += (deck.length === 0 ? -1 : deck[deck.length - 1]) + "\n";
      break;
  }
}
console.log(result);