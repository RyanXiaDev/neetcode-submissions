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
            while(cur !== null){
                seen.add(cur)
                if(cur.val === p.val){
                    return 
                }else if(p.val > cur.val){
                    cur = cur.right
                }else{
                    cur = cur.left
                }    
            }      
        }
        traverse(root)
        function searchNode(cur){
            while(cur !== null){
                if(seen.has(cur)){
                    LCA = cur
                }
                if(cur.val === q.val){
                    return 
                }else if(q.val > cur.val){
                    cur = cur.right
                }else{
                    cur = cur.left
                }
            }
        }
        searchNode(root)
        return LCA
    }
}
