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
     * @return {number}
     */
    maxDepth(root) {
        let maxDepth = 0;
        function traverse(node, curDepth){
            if(node === null){
                maxDepth = Math.max(maxDepth, curDepth)
                return 
            }
            traverse(node.left, curDepth+1)
            traverse(node.right, curDepth+1)
        }
        traverse(root, 0)
        return maxDepth
    }
}
