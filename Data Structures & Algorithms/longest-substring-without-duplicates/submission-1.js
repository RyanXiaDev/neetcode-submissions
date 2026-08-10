class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0;
        let j = 0;
        let seen = new Set()
        let maxLength = 0;
        while(j < s.length){
            while(j < s.length && !seen.has(s[j])){
                seen.add(s[j])
                j++
            }
            maxLength = Math.max(maxLength, j-i)
            while(i < j && s[i] !== s[j]){
                seen.delete(s[i])
                i++
            }
            seen.delete(s[i])
            i++
        }
        return maxLength
    }
}
