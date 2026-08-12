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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let seen = new Set()
        let LCA = root
        
        // populate seen
        function traverse(cur){
            if(cur !== null){
                seen.add(cur)
                if(cur.val === p.val){
                    return 
                }else if(p.val > cur.val){
                    traverse(cur.right)
                }else{
                    traverse(cur.left)
                }    
            }      
        }
        traverse(root)
        function searchNode(cur){
            if(cur !== null){
                if(seen.has(cur)){
                    LCA = cur
                }
                if(cur.val === q.val){
                    return 
                }else if(q.val > cur.val){
                    searchNode(cur.right)
                }else{
                    searchNode(cur.left)
                }
            }
        }
        searchNode(root)
        return LCA
    }
}
