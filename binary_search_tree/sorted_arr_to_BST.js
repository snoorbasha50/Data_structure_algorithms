/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums,start=0,end=nums.length-1) {

    if (start > end) {
          return null;
      }
      
      let mid = Math.floor(start + (end - start) / 2);
      let root = new TreeNode(nums[mid]);
      
      root.left = sortedArrayToBST(nums, start, mid - 1);
      root.right = sortedArrayToBST(nums, mid + 1, end);
      
      return root;
  
      
  };