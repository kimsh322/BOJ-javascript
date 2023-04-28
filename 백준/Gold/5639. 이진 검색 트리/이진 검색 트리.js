const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

class Tree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  insert(num) {
    if (this.value > num) {
      if (!this.left) this.left = new Tree(num);
      else this.left.insert(num);
    } else {
      if (!this.right) this.right = new Tree(num);
      else this.right.insert(num);
    }
  }
}

const tree = new Tree(input[0]);
for (let i = 1; i < input.length; i++) {
  tree.insert(input[i]);
}
let result = "";
const postOrder = (tree) => {
  if (tree.left) postOrder(tree.left);
  if (tree.right) postOrder(tree.right);
  result += tree.value + "\n";
};
postOrder(tree);
console.log(result);