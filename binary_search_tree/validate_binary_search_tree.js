// Valid Binary Search Tree
// Solved 
// Given the root of a binary tree, return true if it is a valid binary search tree, otherwise return false.

// A valid binary search tree satisfies the following constraints:

// The left subtree of every node contains only nodes with keys less than the node's key.
// The right subtree of every node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees are also binary search trees.
// Example 1:



// Input: root = [2,1,3]

// Output: true
// Example 2:



// Input: root = [1,2,3]

// Output: false
// Explanation: The root node's value is 1 but its left child's value is 2 which is greater than 1.



/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root,min=null,max=null){
        console.log("values",root,min,max)
        if(root==null){
            return true
        }
        if(min!==null && root.val<=min){
            return false
        }
        if(max!=null && root.val>=max){
            return false
        }
        return this.isValidBST(root.left,min,root.val) && this.isValidBST(root.right,root.val,max)

    }
}
