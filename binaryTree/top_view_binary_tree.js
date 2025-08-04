class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Solution {
    // Function to return a list of nodes visible from the top view
    // from left to right in Binary Tree.
    topView(root) {
        // code here
     
      let queue = [];
    let queueNode = {
        node: root,
        hd: 0,
    };

    queue.push(queueNode);
    let map = new Map();

    while (queue.length > 0) {
        let curr = queue.shift();
        let node = curr.node;
        let hd = curr.hd;

        if (!map.has(hd)) {
            map.set(hd, node.data); 
        }

        if (node.left !== null) {
            queue.push({ node: node.left, hd: hd - 1 });
        }
        if (node.right !== null) {
            queue.push({ node: node.right, hd: hd + 1 });
        }
    }

    // Extract top view in order of increasing HD
    const result = [];
    const sortedKeys = [...map.keys()].sort((a, b) => a - b);
    for (const key of sortedKeys) {
        result.push(map.get(key));
    }

    return result;
        
        
    }
}