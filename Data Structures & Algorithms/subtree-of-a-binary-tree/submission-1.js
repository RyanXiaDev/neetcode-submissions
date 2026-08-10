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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        let hasSubTree = false
        function isSameTree (p, q){
            if(p === null || q === null){
                return p === q
            }
            if(p.val !== q.val){
                return false
            }
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
        }

        function traverse(node){
            if(node == null) return
            if(node.val === subRoot.val){
                if(isSameTree(node, subRoot)){
                    hasSubTree = true
                }
            }
            traverse(node.left)
            traverse(node.right)
        }
        traverse(root)
        return hasSubTree
    }
}
