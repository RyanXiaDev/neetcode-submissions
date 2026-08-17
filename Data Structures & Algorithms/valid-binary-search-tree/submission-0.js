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
    isValidBST(root) {
        const isValid = (node, min, max) =>{
            if(node === null){
                return true
            }
            if(node.val < max && node.val > min){
                return isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
            }
            return false
            
        }
        return isValid(root, -Infinity, Infinity)
    }
}
