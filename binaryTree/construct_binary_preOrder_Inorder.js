/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    let preIndex = 0;

function Search(inorder, left, right, val) {
    for (let i = left; i <= right; i++) {
        if (inorder[i] === val) {
            return i;
        }
    }
    return -1;
}

function build_tree(left, right) {
    if (left > right) {
        return null;
    }

    let rootVal = preorder[preIndex];
    let root = new TreeNode(rootVal);

    let inIndex = Search(inorder, left, right, rootVal);
    preIndex++;

    root.left = build_tree(left, inIndex - 1);
    root.right = build_tree(inIndex + 1, right);

    return root;
}

return build_tree(0, inorder.length - 1);




};