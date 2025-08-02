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
var maxDepth = function(root) {
    if(root===null){
        return 0
    }
    function traverse_height(node){
        let left=0;
        let right=0;
        console.log("Node came",node)
        if(node.left){
         left=traverse_height(node.left)
        }
        if(node.right){
          right=traverse_height(node.right)
        }
        console.log("Left",left)
        console.log("Right",right)
        return Math.max(left,right)+1
       
    }
    let res=traverse_height(root)
    return res
    console.log("Res",res)


};