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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root === null) return []
        let queue = [root];
        let result = []
        while (queue.length > 0){
            let levelResult = []
            let nextQueue = []
            for(let i = 0; i < queue.length; ++i){
                levelResult.push(queue[i].val)
                queue[i].left && nextQueue.push(queue[i].left)
                queue[i].right && nextQueue.push(queue[i].right)
            }
            result.push(levelResult)
            queue = nextQueue
        }
        return result
    }
}
