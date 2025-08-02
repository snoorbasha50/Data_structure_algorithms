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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // if(root===null||subRoot===null){
    //     return false
    // }
    function isSubtreeCheck(root_tree,subRoot_tree){
        if(root_tree===null||subRoot_tree===null){
            return false
        }
       console.log("root_tree",root_tree.val,subRoot_tree.val)
        if((root_tree.val === subRoot_tree.val) && isIdentical(root_tree,subRoot_tree)){
             return true
        }
        return isSubtreeCheck(root_tree.left,subRoot_tree)||
        isSubtreeCheck(root_tree.right,subRoot_tree)

    }
    let result=isSubtreeCheck(root,subRoot)
    console.log("rresult",result)
    return result




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

    
};
