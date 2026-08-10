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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        function traverse(nodeP, nodeQ){
            if(nodeP === null && nodeQ === null){
                return true;
            }
            if(nodeP?.val !== nodeQ?.val){
                return false
            }
            return traverse(nodeP.left, nodeQ.left) && traverse(nodeP.right, nodeQ.right)
        }
        return traverse(p, q);
    }
    
}
