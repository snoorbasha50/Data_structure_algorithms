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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {

    if(root===null){
        return null
    }
    if(key<root.val){
        root.left=deleteNode(root.left,key)
    }else if(key>root.val){
        root.right=deleteNode(root.right,key)
    }else{
        //node with zero child and 1 child
        if(root.left===null){
            return root.right
        
        }else if(root.right===null){
            return root.left
           
        }else{//2 children
          // Node with 2 children
            let successor = getInorderSuccessor(root.right);
            root.val = successor.val;
            root.right = deleteNode(root.right, successor.val);
        }

    }
    return root

    function getInorderSuccessor(root){
        let current = root;
        while (current && current.left) {
            current = current.left;
        }
        return current;
    }

    
};