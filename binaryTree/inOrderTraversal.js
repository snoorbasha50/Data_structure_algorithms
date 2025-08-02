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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let index=0;
    const result=[]
    function traverse(node){
        index++;
        if(node===null){
            return 
        }
        traverse(node.left)
        result.push(node.val)
        traverse(node.right)
    }
    traverse(root)
    console.log("Result",result)
    return result
    
};