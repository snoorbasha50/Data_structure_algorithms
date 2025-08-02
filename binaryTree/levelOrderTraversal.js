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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result=[]
    if(root===null){
        return result
    }
    const queue=[root]
    while(queue.length>0){
        const levelSize=queue.length
        console.log("Level size",levelSize)
        const level=[]
        for(var i=0;i<levelSize;i++){
           const curr=queue.shift()
           console.log("Curr element",curr)
           level.push(curr.val)
           if(curr.left){
               queue.push(curr.left)
           }
           if(curr.right){
              queue.push(curr.right)
           }
        }
        console.log("Level",level)
        result.push(level)

    }
    console.log("Result",result)
    return result
    
};