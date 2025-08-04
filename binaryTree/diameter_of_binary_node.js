// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

 

// Example 1:


// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:

// Input: root = [1,2]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100


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
var diameterOfBinaryTree = function(root) {
    function diameter_of_tree(root){
        if(root===null){
            return 0
        }
        const left_diameter_of_tree=diameter_of_tree(root.left)
        const right_diameter_of_tree=diameter_of_tree(root.right)
        const height_of_the_tree=height_of_tree(root.left)+height_of_tree(root.right)
        console.log("height of tree",height_of_the_tree)
        return Math.max(left_diameter_of_tree,right_diameter_of_tree,height_of_the_tree)
   }
    let response=diameter_of_tree(root)
    console.log("Response",response)
    return response
    

    
};
 const height_of_tree=(root)=>{
        if(root===null){
            return 0
        }
        const left_height=height_of_tree(root.left)
        const right_height=height_of_tree(root.right)
        return Math.max(left_height,right_height)+1
 
 
    }



// optimised way o(n)
    var diameterOfBinaryTree = function(root) {
        let ans = 0;
      
          const height_of_tree = (node) => {
              if (node === null) return 0;
      
              const left_height = height_of_tree(node.left);
              const right_height = height_of_tree(node.right);
      
              ans = Math.max(ans, left_height + right_height);
              return Math.max(left_height, right_height) + 1;
          };
      
          height_of_tree(root);
          return ans;
          
      };



