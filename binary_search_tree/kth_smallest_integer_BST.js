// Kth Smallest Integer in BST
// Solved 
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) in the tree.

// A binary search tree satisfies the following constraints:

// The left subtree of every node contains only nodes with keys less than the node's key.
// The right subtree of every node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees are also binary search trees.
// Example 1:



// Input: root = [2,1,3], k = 1

// Output: 1
// Example 2:



// Input: root = [4,3,5,2,null], k = 4

// Output: 5
// Constraints:

// 1 <= k <= The number of nodes in the tree <= 1000.
// 0 <= Node.val <= 1000


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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let result=null
        let count=0
        function inOrder(root,k){
             if(!root||root===null){
               return -1
            }
            inOrder(root.left,k)
            count++;
            if(count==k){
                result=root.val
            }
            inOrder(root.right,k)
        }
        inOrder(root,k)
        return result


    }
}

