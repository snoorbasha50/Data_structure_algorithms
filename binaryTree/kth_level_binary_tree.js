function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// Sample Tree:
//         1
//       /   \
//      2     3
//     / \
//    4   5

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

console.log("root value", root);

const kth_level = (root, k, result = []) => {
  if (root == null) {
    return;
  }
  if (k === 1) {
    result.push(root.val);
    return;
  }
  kth_level(root.left, k - 1, result);
  kth_level(root.right, k - 1, result);
  console.log("Result output", result);
  return result;
};

let res = kth_level(root, 2);
console.log("Response output", res);
