/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p===null && q===null){
        return true;
    }
    if(p===null||q===null){
        return false;
    }

    function isIdentical(tree1,tree2){
        if(tree1===null && tree2===null){
            return true;
        }
        if(tree1===null || tree2===null){
            return false;
        }
        if(tree1.val!==tree2.val){
            return false;
        }
       
        let leftTree=isIdentical(tree1.left,tree2.left)
        
        let rightTree=isIdentical(tree1.right,tree2.right)
        return leftTree && rightTree;

    }
    let result=isIdentical(p,q)
    return result

    
};