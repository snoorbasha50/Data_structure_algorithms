/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if(!root||root==null){
        return 0
    }

    function count_nodes(node){
        let left_count=0;
        let right_count=0;
        if(node.left){
            left_count=count_nodes(node.left)
        }
        if(node.right){
            right_count=count_nodes(node.right)
        }
        return left_count+right_count+1
    }

    let res=count_nodes(root)
    return res

    
};