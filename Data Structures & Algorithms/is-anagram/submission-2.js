class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        let sMap = new Map()
        for(let i = 0; i < s.length; i++){
            if(sMap.has(s[i])){
                sMap.set(s[i], sMap.get(s[i]) + 1)
            }else{
                sMap.set(s[i], 1)
            }
        }

        for(let i = 0; i < t.length; i++){
            if(sMap.has(t[i])){
                sMap.set(t[i], sMap.get(t[i]) - 1)
                if(sMap.get(t[i]) === 0){
                    sMap.delete(t[i])
                }
            }else{
                return false
            }     
        }
        return true
    }
}
